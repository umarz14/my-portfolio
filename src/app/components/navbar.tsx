import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-green-700 text-green-100 py-4 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
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