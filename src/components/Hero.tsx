import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import graphImage from "../assets/graphScale.png";

function Hero() {
  return (
    <section>
      <div className="container py-20">
        <div className="flex flex-col items-center ">
          <button className=" gap-1 bg-[#e4e0fd]/50 inline-flex whitespace-nowrap items-center px-3 py-2 rounded-full text-[#6c40f9] font-semibold mb-4">
            <div className="">REGE v2.3</div>
            <ChevronRight />
          </button>
          <h2 className=" text-[32px] font-[700] leading-[120%] text-center ">
            Launch Your Sass
          </h2>
          <span className=" text-[32px] font-[700] leading-[120%] text-center gradient-text py-2">
            In Minutes Not Days
          </span>
          <p className="text-lg text-gray-600 mt-5 text-center w-full">
            REGE is an open-source tool for developers who want to launch their
            ideas faster.
          </p>
          <div className="flex gap-3 py-5">
            <Button className="rounded-full text-md font-semibold tracking-tight shadow-lg px-5">
              Get Started
            </Button>
            <Button className="rounded-full text-md font-semibold tracking-tight bg-white text-black shadow-lg border px-5">
              Learn More
            </Button>
          </div>

          <img src={graphImage} alt="graphs" className="w-[450px] " />
          <div className="h-[1000px]">hello</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
//border-4 border-red-700
