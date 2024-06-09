import { IoIosMenu } from "react-icons/io"

import { Link, useLocation } from "react-router-dom"
import Buttons from "./Buttons"
import { useState } from "react"

import {  BiArrowToLeft} from "react-icons/bi"

function Navbar() {

    const [Shownav, setShownav] = useState(false)
    
    const location=useLocation()
    const {pathname} =location

  return <div className=" w-full bg-black text-green-600 h-[100px] "  >

    <nav className="   relative flex flex-wrap  items-center justify-between px-2  ">

        <div className=" ">
            <Link to={"/"} className=" flex  flex-col">
<img src="/nvidia.png" className=" w-40 "/>
<p className=" relative bottom-8 left-16 text-xl text-green-500 font-semibold">
    
   <span className="text-2xl">P</span>artner's</p>
 
            </Link>
            
        </div>
<div className=" flex gap-20">
        <div className="hidden lg:block">
            <ul className=" flex gap-14 max-lg:gap-20 items-center pt-4 ">
                    <Link to={"/"}>

               <li>
                <p className={` text-[16px] ${pathname ==="/" ? " text-green-100" :""}`}>Home</p>
               </li>
               </Link> 
               
               <Link to={"/about"}>

               <li>
                <p className={` text-[16px] ${pathname.includes("about") ? " text-green-100" :""}`}>About</p>
               </li>
               </Link> 

                   
               {/* <Link to={"/ecosystem"}>

               <li>
                <p className={` text-[16px] ${pathname.includes("ecosystem") ? " text-green-100" :""}`}>Ecosystem</p>
               </li>
               </Link>  */}
                <Link to={"/connect"} >

               <li>
                <p className={` text-[16px] ${pathname.includes("connect") ? " text-green-100" :""}`}>Connect</p>
               </li>
               </Link> 
            
            </ul>
        </div>

        <div className="hidden lg:flex gap-10 w-full"  >
<Buttons title="Join" rederectTo="/auth/singup" classname=" w-[100px]"/>
<Buttons title="Singin" rederectTo="/auth/singin" classname="w-[100px]"/>

            
        </div>

</div>


<div className=" lg:hidden">
    <div className="" onClick={()=>setShownav(!Shownav)}>
  <IoIosMenu  size={37}/>
    </div>

     
     
  

</div>




   
    </nav>
    
    {/* mobile nav */}


    <div className={` duration-300  ease-linear   border-r overflow-y-hidden border-green-400  bg-gradient-to-t from-[#13250a] to-black w-2/3 h-screen fixed top-0 z-50 left-0 ${Shownav ? 'translate-x-0' : '-translate-x-full'}`}>

<div className="mx-3 my-6 flex justify-end" onClick={()=>setShownav(!Shownav)}>
  
<BiArrowToLeft  size={37} className=" text-green-700"/>


</div>

<div className="">
     <ul className=" flex flex-col justify-center items-center gap-10 ">
                    <Link to={"/"}>

               <li>
                <p className={` text-[18px] ${pathname ==="/" ? " text-green-100" :""}`}>Home</p>
               </li>
               </Link> 
               
               <Link to={"/about"}>

               <li>
                <p className={` text-[18px] ${pathname.includes("about") ? " text-green-100" :""}`}>About</p>
               </li>
               </Link> 

{/*                    
               <Link to={"/ecosystem"}>

               <li>
                <p className={` text-[18px] ${pathname.includes("ecosystem") ? " text-green-100" :""}`}>Ecosystem</p>
               </li>
               </Link>  */}
                <Link to={"/connect"} >

               <li>
                <p className={` text-[18px] ${pathname.includes("connect") ? " text-green-100" :""}`}>Connect</p>
               </li>
               </Link> 
            
            </ul>
</div>

     


        <div className="flex gap-10 h-1/3  justify-center  items-end" >
            <div className=" w-full ">
<div className="my-8 w-full justify-center ">
      <Buttons title="Join" rederectTo="/auth/singup" classname=" w-2/3 mx-auto"/>
</div>
              
<Buttons title="Login" rederectTo="/auth/singin" classname=" w-2/3 mx-auto"/>


            </div>


            
        </div>

     <div className=" h-1/4 flex justify-center items-end ">
        
      
<div className="">
    <img src="/nvidia.png" className=" w-40" alt="" />
    <p className=" relative bottom-6 left-12 text-white">Prtner's Profit</p>

</div>
     </div>
    </div>
    
    </div>
}

export default Navbar
