"use client"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { CodeBlock, dracula } from 'react-code-blocks';



import {
    Card,
    CardContent,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


import { Menu } from "lucide-react";

import Link from "next/link";
import { ThemeToggle } from "@/components/general/Theme-toggle";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
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


const code = `"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { useTheme } from "next-themes"
import Image from "next/image"
import { cn } from "@/lib/utils"

const ThemeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? theme === "dark" : false

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-1 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      // Set the switch state based on the current theme.
      checked={isDark}
      // Toggle the theme on switch state change.
      onCheckedChange={(checked) => {
        setTheme(checked ? "dark" : "light")
      }}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
            "flex items-center justify-center pointer-events-none block h-5 w-5  rounded-full transition-transform duration-300 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"
        )}
      >
        {isDark ? <Image src="/moon.png" alt="Moon" width={22} height={22} /> : <Image src="/sun.png" alt="Sun" width={22} height={22} />}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  )
})

ThemeSwitch.displayName = SwitchPrimitives.Root.displayName

export { ThemeSwitch }
}
    `

export default function ExportThemeToggleOne() {
    return (
        <Tabs defaultValue="view" className="w-[75rem]">
            <TabsList className="grid grid-cols-2 w-[200px]">
                <TabsTrigger value="view">View</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="view" >
                <Card className="border  flex justify-center items-center ">
                    <CardContent className="p-8">
                        <ThemeSwitch />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="code" className="w-full">
                <Card>

                    <CardContent className="space-y-2">
                        <CodeBlock text={code} language="jsx" showLineNumbers={true} theme={dracula} />
                    </CardContent>

                </Card>
            </TabsContent>
        </Tabs>
    )
}

