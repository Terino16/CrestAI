import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from "lucide-react";

import Link from "next/link";
import { ThemeToggle } from "@/components/general/Theme-toggle";
import { Label } from "../ui/label";

const links = [
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Components",
    href: "/components",
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]
export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0  max-w-6xl mx-auto flex justify-between items-center p-4 mt-2">
      <div className="absolute inset-0 border-[2px]
           border-red-500 rounded-full 
           pointer-events-none border-t-0 
           border-l-0 border-r-0 blur-sm
           border-opacity-40"></div>

      <div className="flex items-center gap-2 justify-end">
        <Link href="/" className="flex items-center gap-2 group">
          <h1 className="text-2xl px-2 font-bold tracking-tight font-sans bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
            Anubhav
          </h1>
          <span className="opacity-0 transform translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            🚀
          </span>
        </Link>
      </div>

      <div className="flex gap-6 font-sans md:flex hidden">
        {links.map((link) => (
          <Link href={link.href} key={link.href}><Label className="text-sm font-light cursor-pointer antialiased  text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-100 transition-all duration-300">{link.label}</Label></Link>
        ))}
        <ThemeToggle />
      </div>

      <div className="md:hidden flex items-center gap-2">
        <Sheet>
          <SheetTrigger>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-3 mt-3">
              {links.map((link) => (
                <Link href={link.href} key={link.href}><Label className="text-[20px]  text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-100 transition-all duration-300">{link.label}</Label></Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <ThemeToggle />
      </div>
    </nav>
  );
}