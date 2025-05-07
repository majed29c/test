import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";
import { IoArrowRedoOutline } from "react-icons/io5";
export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text  text-transparent text-center bg-gradient-to-b from-blue-900 to-blue-700 text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Hey,I'm GDG.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700  text-center">
        Software engineer with 4 years of experience, web development expert..
      </p>
      <Link href={"#projects"}>
        <button className="px-8 relative py-2 flex gap-2 my-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
         See Projects <IoArrowRedoOutline size={24} />
        </button>
      </Link>
    </BackgroundLines>
  );
}
 