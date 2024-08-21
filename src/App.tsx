import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RoadmapSection from "./components/RoadmapSection";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import { partners } from "./data/partners";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none ">
        {/*grid background */}
        <div className="inset-0 absolute bg-[url('/grid-pattern.png')] opacity-40"></div>
        {/*mesh background */}
        <img
          src="/mesh3.svg"
          alt="mesh"
          className="w-full opacity-15 absolute bottom-1 "
        />
        {/*central mask */}
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>

      <div className="relative z-20">
        <Header />
        <Hero />
        <Slider images={partners} />
        <RoadmapSection />
        <Features />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
