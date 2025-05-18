"use client"

import Link from "next/link"


import { Button } from "@/components/ui/button"
import ModeToggle from "@/components/general/Theme-toggle"

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import AuroraGradient from "@/components/magicui/aurora-gradient"


export default function Home() {
  return (
    <>
      <main className="min-h-screen  text-white overflow-hidden">

  
        <nav className="relative z-10 flex items-center justify-between px-6 py-8 md:px-12  max-w-7xl mx-auto">


          <div>

            <Link href="#">
              <p className="text-2xl font-light text-black dark:text-white tracking-tight ">Crest AI</p>
            </Link>
          </div>
         


          <div className="flex items-center gap-4">

          <Link
            href="#">
            <Button variant="rainbow" className="font-[550] rounded-xl text-zinc-950  " >
              Get Started
            </Button>
          </Link>

          <Link
            href="#" className="hidden md:block">
            <Button variant="outline" className="font-[550] rounded-xl text-zinc-950  " >
              Sign In
            </Button>
          </Link>



          <ModeToggle />

          </div>

         

        </nav>



      {/* Hero Section */}
        <div className="flex flex-col items-center justify-start gap-4 mt-[30%] md:mt-[10%] ">


        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Crest AI Beta Version</span>

          </AnimatedShinyText>



          <div className="flex flex-col items-center gap-6 text-center ">

            <p className="text-7xl text-black dark:text-white tracking-tighter ">
              Talk to your Calendar
            </p>

            <p className="text-[15px] text-zinc-500 dark:text-zinc-400 px-4 md:max-w-2xl  mx-auto">
            Schedule meetings, check availability, and get timely reminders—all through simple conversations with Crest AI.
            </p>


    <div className="flex items-center gap-4">



            <Link
            href="#">
            <Button variant="rainbow" className="font-[550] rounded-xl text-zinc-950  " >
              Get Started
            </Button>
          </Link>

          <Link
            href="#">
            <Button variant="outline" className="font-[550] rounded-xl text-zinc-950  " >
              Know More
            </Button>
          </Link>
          </div>

         


          </div>




</div>
    
     

      </main>
      <AuroraGradient />
    </>
  )
}


