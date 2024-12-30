"use client"
import React from "react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 bg-black text-offwhite shadow-md z-20  
                  transition-transform duration-300 
                  ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Uriel Martinez</h1>
                <div className="space-x-6">
                <a href="#hero" className="hover:text-green-300">
                    Home
                </a>
                <a href="#about" className="hover:text-green-300">
                    About
                </a>
                <a href="#projects" className="hover:text-green-300">
                    Projects
                </a>
                <a href="#contact" className="hover:text-green-300">
                    Contact
                </a>
                </div>
            </div>
    </nav>
  );
};

export default Navbar;

