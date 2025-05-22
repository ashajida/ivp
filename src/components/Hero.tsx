import OnAir from "./OnAir";
import GlobeScene from "./spline/GlobeScene";

const Hero = () => {
    return (
        <section className="w-full container mx-auto flex justify-center py-10 h-screen items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold mb-4 items-center">IVP Presents</h1>
              <div className="flex gap-1 items-center">
                  <OnAir />
                    <p className="text-lg">Sam Smith</p>
              </div>
            <p className="text-lg mb-8">Name of the show</p>
            <button className="cursor-pointer flex items-center bg-white text-black px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>
<span className="text-lg ml-2">Listen Live</span>
            </button>
            </div>
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
        </section>
    );
}

export default Hero;