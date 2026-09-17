import * as React from 'react'
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion'

const TAU = Math.PI * 2
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function HaloReel({
  items,
  cardWidth = 130,
  cardHeight = 180,
  minScale = 0.4,
  radiusXRatio = 0.45,
  centerXRatio = 0,
  radiusYRatio = 0.36,
  autoPlay = true,
  holdDuration = 1000,
  stepDuration = 700,
  pauseOnHover = true,
  draggable = true,
  spread = 1.2,
  maxCards = 64,
  dragSensitivity = 1,
  centerLabel,
  showCenterLabel = true,
  className,
  style,
  ...props
}) {
  const stageRef = React.useRef(null)
  const reduceMotion = useReducedMotion()
  const count = items.length
  const rotation = useMotionValue(0)
  const draggingRef = React.useRef(false)
  const hoverRef = React.useRef(false)
  const [size, setSize] = React.useState({ w: 0, h: 0 })

  React.useEffect(() => {
    const node = stageRef.current
    if (!node) return
    const measure = () => setSize({ w: node.offsetWidth, h: node.offsetHeight })
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const radiusX = size.w * radiusXRatio
  const radiusY = size.h * radiusYRatio

  const slots = clamp(
    Math.ceil(
      TAU * Math.max(
        radiusX / (cardWidth * spread),
        radiusY / (cardHeight * spread),
      ),
    ),
    count,
    Math.max(count, maxCards),
  )
  const step = slots ? TAU / slots : 0

  const fit = size.w
    ? clamp(
        Math.min(
          size.w / (radiusX + cardWidth),
          size.h / (2 * radiusY + cardHeight),
        ),
        0.45,
        1,
      )
    : 1
  const cardW = cardWidth * fit
  const cardH = cardHeight * fit

  React.useEffect(() => {
    if (!autoPlay || reduceMotion || !count) return
    let timer = 0
    let controls

    const tick = () => {
      timer = window.setTimeout(() => {
        if (draggingRef.current || (pauseOnHover && hoverRef.current)) {
          tick()
          return
        }
        controls = animate(rotation, rotation.get() - step, {
          duration: stepDuration / 1000,
          ease: [0.4, 0, 0.2, 1],
          onComplete: tick,
        })
      }, holdDuration)
    }
    tick()
    return () => {
      window.clearTimeout(timer)
      controls?.stop()
    }
  }, [autoPlay, count, holdDuration, pauseOnHover, reduceMotion, rotation, step, stepDuration])

  const dragRef = React.useRef({ left: 0, top: 0, angle: 0 })

  const pointerAngle = (e) => {
    const { left, top } = dragRef.current
    return Math.atan2(
      (e.clientY - top - size.h / 2) / (radiusY || 1),
      (e.clientX - left - size.w * centerXRatio) / (radiusX || 1),
    )
  }

  const onPointerDown = (e) => {
    if (!draggable || (e.pointerType === 'mouse' && e.button !== 0)) return
    const rect = e.currentTarget.getBoundingClientRect()
    dragRef.current = { left: rect.left, top: rect.top, angle: 0 }
    dragRef.current.angle = pointerAngle(e)
    draggingRef.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!draggingRef.current) return
    const angle = pointerAngle(e)
    const delta = ((angle - dragRef.current.angle + Math.PI * 3) % TAU) - Math.PI
    dragRef.current.angle = angle
    rotation.set(rotation.get() + delta * dragSensitivity)
  }

  const endDrag = (e) => {
    if (!draggingRef.current) return
    draggingRef.current = false
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
    const snapped = Math.round(rotation.get() / step) * step
    if (reduceMotion) { rotation.set(snapped); return }
    animate(rotation, snapped, { duration: 0.5, ease: [0.16, 1, 0.3, 1] })
  }

  const spinBy = (direction) => {
    const target = Math.round(rotation.get() / step) * step - direction * step
    if (reduceMotion) { rotation.set(target); return }
    animate(rotation, target, { duration: stepDuration / 1000, ease: [0.4, 0, 0.2, 1] })
  }

  const onKeyDown = (e) => {
    const direction = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    if (!direction) return
    e.preventDefault()
    spinBy(direction)
  }

  if (!count) return null

  return (
    <div
      ref={stageRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={props['aria-label'] ?? 'Image carousel'}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={cn(
        'relative w-full touch-pan-y select-none overflow-hidden outline-none',
        draggable && 'cursor-grab active:cursor-grabbing',
        className,
      )}
      style={style}
      {...props}
    >
      {showCenterLabel && centerLabel ? (
        <div
          className="pointer-events-none absolute inset-y-0 z-0 flex items-center justify-center px-4 text-center"
          style={{
            left: size.w * centerXRatio + radiusX + cardW / 2,
            right: 0,
          }}
        >
          {centerLabel}
        </div>
      ) : null}

      {Array.from({ length: slots }, (_, i) => (
        <WheelCard
          key={i}
          item={items[i % count]}
          decorative={i >= count}
          index={i}
          step={step}
          rotation={rotation}
          radiusX={radiusX}
          radiusY={radiusY}
          centerXRatio={centerXRatio}
          minScale={minScale}
          width={cardW}
          height={cardH}
          onHoverChange={(hovered) => { hoverRef.current = hovered }}
        />
      ))}
    </div>
  )
}

function WheelCard({
  item, index, step, rotation, radiusX, radiusY,
  centerXRatio, minScale, width, height, decorative, onHoverChange,
}) {
  const cos = useTransform(rotation, (r) => Math.cos(index * step + r))
  const sin = useTransform(rotation, (r) => Math.sin(index * step + r))
  const x = useTransform(cos, (c) => c * radiusX)
  const y = useTransform(sin, (s) => s * radiusY)
  const scale = useTransform(cos, (c) => minScale + (1 - minScale) * ((c + 1) / 2))
  const zIndex = useTransform(scale, (s) => Math.round(s * 1000))

  return (
    <motion.div
      role={decorative ? undefined : 'group'}
      aria-roledescription={decorative ? undefined : 'slide'}
      aria-hidden={decorative || undefined}
      onPointerEnter={() => onHoverChange(true)}
      onPointerLeave={() => onHoverChange(false)}
      style={{
        x, y, scale, zIndex,
        width, height,
        left: `${centerXRatio * 100}%`,
        top: '50%',
        marginLeft: -width / 2,
        marginTop: -height / 2,
      }}
      className="absolute overflow-hidden shadow-xl"
    >
      {item.src ? (
        <img
          src={item.src}
          alt={decorative ? '' : (item.alt ?? '')}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-1 p-3 text-center"
          style={{ backgroundColor: item.bgColor ?? '#1a1a1a', color: item.textColor ?? '#fff' }}
        >
          {item.title && <span className="text-2xl font-black leading-none">{item.title}</span>}
          {item.subtitle && <span className="text-[0.6rem] uppercase tracking-[0.2em] opacity-70">{item.subtitle}</span>}
        </div>
      )}
    </motion.div>
  )
}

export default HaloReel
