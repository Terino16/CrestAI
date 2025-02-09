"use client"
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function MobileHero() {
    return (
        <div className="md:hidden block max-w-6xl mx-auto mt-20 p-10 md:p-20 gap-1  ">


            <div className="flex flex-col items-center justify-center  space-y-8 ">
                <Link href="/" className="px-3 py-2 rounded-md bg-transparent border-[1px] border-zinc-400 hover:motion-preset-confetti ">
                    <Label className="flex items-center gap-2">
                        Checkout Components
                        <ArrowRightIcon className="w-4 h-4 motion-preset-wobble  " />
                    </Label>
                </Link>
                <div>
                <h1 className="text-5xl text-center  font-bold  leading-tight animate-fade-in-up animate-slidein [--slidein-delay:300ms]">
                    Busy Building <br/>Cool
                    {" "}
                    <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent text-bottom">Tech</span>
                    <br />
                </h1>
                </div>

                <p className="text-zinc-400 text-sm text-center leading-5 max-w-2xl">
                    Hi, I’m Anubhav – a passionate Software Engineer specializing in building dynamic, user-focused web applications. With a strong foundation in Next.js, React, and Tailwind CSS, I create seamless, scalable solutions that blend functionality with modern design. Whether it’s crafting intuitive interfaces or developing robust backend systems, I’m driven by a commitment to clean code and innovative problem-solving. Let’s build something amazing together.
                </p>
                

                <Link
  href="https://cal.com/anubhav-dube-h6xzsc"
  target="_blank"
  className="relative inline-flex group"
  passHref
>
  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#ffca33] via-[#ff9333] to-[#ff4f33] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

  <div className="relative inline-flex items-center justify-center px-4 py-3 text-lg font-bold text-white transition-all duration-200 bg-black border-[2px] border-zinc-400 font-pj rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
    <Label className="flex items-center gap-2">Schedule Meeting</Label>
  </div>
</Link>


               

                {/* <div className="absolute bottom-0 right-0 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 w-[15vh] h-[15vh] blur-3xl"></div>
                <div className="absolute bottom-0 left-0 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 w-[15vh] h-[15vh] blur-3xl"></div> */}

            </div>
        </div>
    );
}

