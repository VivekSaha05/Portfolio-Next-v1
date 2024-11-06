"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import mapImage from "@/assets/images/map.png";
import smileMemo from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolItem } from "@/components/ToolItem";
import { motion } from "framer-motion";
import { useRef } from "react";

const ToolboxItems = [
  {
    title: "React",
    icon: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    title: "Javascript",
    icon: "https://www.svgrepo.com/show/373705/js-official.svg",
  },
  {
    title: "NodeJS",
    icon: "https://www.svgrepo.com/show/452075/node-js.svg",
  },
  {
    title: "MongoDB",
    icon: "https://www.svgrepo.com/show/373845/mongo.svg",
  },
  {
    title: "MySQL",
    icon: "https://www.svgrepo.com/show/473731/mysql.svg",
  },
  {
    title: "Tailwind",
    icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    title: "CSS",
    icon: "https://www.svgrepo.com/show/452185/css-3.svg",
  },
  {
    title: "HTML5",
    icon: "https://www.svgrepo.com/show/452228/html-5.svg",
  },
];

const hobbies = [
  {
    title: "photography",
    emoji: "📸",
    left: "5%",
    top: "5%",
  },
  {
    title: "guitar",
    emoji: "🎸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Swimming",
    emoji: "🏊🏻",
    left: "10%",
    top: "35%",
  },
  {
    title: "YT Vlog",
    emoji: "📹",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gym",
    emoji: "🏋🏻",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "5%",
    top: "65%",
  },
  {
    title: "ladkibazi",
    emoji: "🫦",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse About Me"
          description="Learn more about who I am, what I do, and what inspires me!!"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                desc="Explore what i like the most."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                desc="Explore Tech What i like to use."
                className=""
              />
              <ToolItem ToolboxItems={ToolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
              <ToolItem
                ToolboxItems={ToolboxItems}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond The Code"
                desc="Explore more about my interest and hobbies."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute  size-20 rounded-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemo} alt="smile" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
