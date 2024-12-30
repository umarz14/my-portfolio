import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

const Hero = () => {
  return (
    <section id="hero" className="">
      <WavyBackground
        className="mx-auto pb-40 mt-auto"
        backgroundFill="#163020"
        colors={["#EEF0E5", "#B6C4B6", "#EEE7DA", "#F2F1EB", "#AFC8AD", "#88AB8E"]}
      >
        <div className="container overflow-hidden">
          <div className="flex justify-center items-center">
            <img
              src="/venusaur.gif"
              alt="Uriel Martinez"
              className="rounded-full h-40 w-40 md:h-52 md:w-52 lg:h-80 lg:w-80 border-4 border-white bg-morninggreen"
            />
          </div>
        </div>
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Hello, I'm Uriel
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Aspiring Software Engineer | Full Stack Developer
        </p>
      </WavyBackground>
    </section>
  );
};

export default Hero;