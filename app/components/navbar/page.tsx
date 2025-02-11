
import ExportNavbar from "@/components/components/navbar/navone/Navbar"



export default function Page() {
    return (
        <div className="w-full space-y-5 antialiased"> 
        <div>
            <p className="text-4xl font-bold">Navbars</p>
        </div>
        <div className="px-2 space-y-2">
        <p className="text-xl  font-semibold">Red Shadow Navbar</p>
        <p className="text-gray-500 text-sm">A navbar menu that animates its children on hover, makes a beautiful bignav</p>
        <ExportNavbar />
        </div>   
        
        </div>
          
      )
    }