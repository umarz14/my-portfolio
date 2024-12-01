import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconMug,
  IconStretching,
  IconSofa,
  IconServer,
} from "@tabler/icons-react";

const Projects = () => {
    return (
        <section id="projects" className="h-full flex flex-col justify-center items-center text-center bg-alabaster border-2 border-fuchsia-700">
            {/* <div>
                <h2 className="text-4xl font-semibold text-green-900">Projects</h2>
            </div> */}
            <div className="p-8">
                <MyBentoGrid />
            </div>
            {/* <div className="grid gap-8 mt-8">
                <div className="p-4 shadow-md bg-white rounded-md">
                    <h3 className="text-2xl text-green-800">Coffee Realm</h3>
                    <p className="text-green-700">A coffee shop finder app utilizing Google Maps API and Angular.</p>
                    <a href="#" target="_blank" className="text-green-600 underline">View Project</a>
                </div>
                <div className="p-4 shadow-md bg-white rounded-md">
                    <h3 className="text-2xl text-green-800">To-Do App</h3>
                    <p className="text-green-700">A simple task management tool built with React and Firebase.</p>
                    <a href="#" target="_blank" className="text-green-600 underline">View Project</a>
                </div>
            </div> */}
      </section>
    );
};



export default Projects;

const MyBentoGrid = () => {
    return (
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    );
  }
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-white dark:border-white/[0.2] bg-ashgray dark:bg-black"></div>
  );
  const items = [
    {
      title: "Coffee Realm",
      description: "A coffee shop finder web app utilizing Google Maps API and Angular.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconMug className="h-5 w-5 text-neutral-500" />,
    },
    {
      title: "WorkoutPals",
      description: "A mobile app that helps you find workout buddies in your area.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconStretching className="h-5 w-5 text-neutral-500" />,
    },
    {
      title: "The Living Room",
      description: "A mobile app that helps you and your roommates manage household chores.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconSofa className="h-5 w-5 text-neutral-500" />,
    },
    {
      title: "ProxMox / SpotiPiPlayer",
      description:
        "Still deciding what project to display for this one",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconServer className="h-4 w-4 text-neutral-500" />,
    },
  ];
  