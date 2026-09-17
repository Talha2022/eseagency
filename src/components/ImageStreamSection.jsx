import ImageStreamHero from "./ui/ImageStreamHero";
import kat1  from '../assets/Agency/imgi_52_65aa55ad9abffedbe6cedd6d_ese-kat2-4-p-500.jpg'
import kat2  from '../assets/Agency/imgi_53_65aa83f3232766f4560fcba4_ese-kat7-1-p-500.jpg'
import kat3  from '../assets/Agency/imgi_54_654b6fe559e9fd255cb9f028_ese-history-1-7-p-500.jpg'
import kat4  from '../assets/Agency/imgi_55_654b6fe5ff205c104e5a5cd0_ese-history-1-1-p-500.jpg'
import kat5  from '../assets/Agency/imgi_56_65aa624f7764605abdc867d3_ese-kat3-3-p-500.jpg'
import kat6  from '../assets/Agency/imgi_57_65aa8884936b21655c572bcc_ese-kat7-7-p-500.jpg'
import kat7  from '../assets/Agency/imgi_58_65aa623826783da5fc812ece_ese-kat3-2-p-500.jpg'
import kat8  from '../assets/Agency/imgi_59_65aa778e92ab5dbc86f4aeff_ese-kat5-2-p-500.jpg'
import kat9  from '../assets/Agency/imgi_60_651d15fb8f27f4a03c14b041_ese-jobs-team13-p-500.jpg'

const IMAGES = [
  { src: kat1, alt: 'ESE Agency culture' },
  { src: kat2, alt: 'ESE Agency team' },
  { src: kat3, alt: 'ESE Agency history' },
  { src: kat4, alt: 'ESE Agency history' },
  { src: kat5, alt: 'ESE Agency office' },
  { src: kat6, alt: 'ESE Agency team' },
  { src: kat7, alt: 'ESE Agency culture' },
  { src: kat8, alt: 'ESE Agency work' },
  { src: kat9, alt: 'ESE Agency team' },
];

export default function ImageStreamSection() {
  return (
    <ImageStreamHero
      images={IMAGES}
      cards={9}
      speed={20}
      axis={80}
      className="h-[700px] w-full bg-black"
    >
      {/* Overlay content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-start text-center px-6 gap-4 pt-14">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Your work,<br />front and centre.
        </h2>
        <p className="max-w-md text-sm text-white/60 leading-relaxed">
          A hero that leads with the images instead of describing them.
          Swap in your own and the corridor rebuilds around them.
        </p>
      </div>
    </ImageStreamHero>
  );
}
