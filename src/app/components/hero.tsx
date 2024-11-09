"use client"
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
    return (
      //   <section id="hero" className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-green-100 pt-20">
      //   <h1 className="text-5xl font-bold">Hello, I'm [Your Name]</h1>
      //   <p className="text-2xl mt-4">Aspiring Software Engineer | Full Stack Developer</p>
      // </section>
      <WavyBackground className="max-w-max mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hello, I'm Uriel
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Aspiring Software Engineer | Full Stack Developer
      </p>
    </WavyBackground>
      
    );
};

export default Hero;
