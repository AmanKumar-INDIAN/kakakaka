import React, { useState } from "react"
import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header";







function DefaultLayout({children}:{children:React.ReactNode}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return <div className="text-white bg-black  " >
<div className="flex h-screen overflow-hidden ">
{/* sidebar */}

<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

<div className=" relative flex flex-1 flex-col  overflow-y-auto overflow-x-hidden">
    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>


{/* main */}
     <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-gradient-to-r from-[#091205] via-[#13250a] to-gray-800">
              {children}
            </div>
          </main>

</div>


</div>

  </div>
}

export default DefaultLayout
