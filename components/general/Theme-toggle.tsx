import { Label } from "@/components/ui/label"
import { ThemeSwitch } from "@/components/ui/ThemeSwitch"
 
export function ThemeToggle() {
  return (
    <div className="flex items-center space-x-2">
      <ThemeSwitch  />
    </div>
  )
}