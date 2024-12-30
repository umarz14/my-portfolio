import React from "react";
import { IconMessage } from "@tabler/icons-react";

const About = () => {
    return (
        <section id="about" className="h-screen flex items-center justify-center bg-white text-black text-4xl font-bold">
            <div className="flex items-center space-x-4 p-10">
                <h2 className="text-4xl font-semibold text-black">About Me</h2>
                <IconMessage className="w-10 h-10 text-black" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 p-10">
                <img src= "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" height={400} width={200}/>
                <div className="text-black">
                    <p className="text-lg">
                        Hi there! 👋 I'm a passionate software developer with a Bachelor’s degree in Computer Science from 
                        California State University, Chico. I specialize in building reliable and efficient software solutions, 
                        focusing on web and mobile development, backend systems, and DevOps practices.
                    </p>
                    <p className="text-lg"> 
                        Over the past few years, I’ve worked on diverse projects that showcase my passion for problem-solving and clean, maintainable code. I developed <strong>Coffee Realm</strong>, 
                        a full-stack web application using Angular and Bootstrap, with seamless Google Maps API integration to help users locate and rate coffee shops. I’ve also built applications 
                        like <strong>WorkoutPals</strong>, an Android app designed to connect gym-goers through real-time check-ins and messaging, and an <strong>Instagram Clone</strong>, 
                        demonstrating my ability to design and deliver feature-rich platforms.
                    </p>
                    <p className="text-lg">
                        In my free time, I enjoy working out, experimenting and learning through my homelab server, and hitting the slopes to snowboard. 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;