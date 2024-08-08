'use client'

import Image from 'next/image';
import React, {useState} from 'react';
import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)



  return (
    <div className='w-full fixed flex justify-betweenbg-gradient-to-tr from-slate-50 via-gray-200 to-red-300 text-slate-700 p-5'>
         <div className='w-full' >
         <Link href="/">  
        <Image src="/logopink.png" alt="logo" width={200} height={100} />
        </Link>
        </div>
        <div className='w-full h-full flex justify-end items-center'>
        <div onClick={handleClick} className=" z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <div className={!nav ? "hidden" : "absolute top-[90px] right-2 w-full md:w-40  h-screen bg-slate-200 flex flex-col items-center rounded-lg"}>
        <ul>
               <li className=" py-6 text 4xl"><Link href="/" >
                Inicio
    
        </Link></li>
               <li className=" py-6 text 4xl"><Link href="/nosotros" >
                Nosotros
        
        </Link></li>
               <li className=" py-6 text 4xl"><Link href="/nosotros/gatitos" >
                Gatitos
        
        </Link></li>
               <li className=" py-6 text 4xl"><Link href="/nosotros/aftermovie" >
                Aftermovie
    
        </Link></li>
               <li className=" py-6 text 4xl"><Link href="/memes" >
                Memes

               
        </Link></li>
           </ul>
           
        </div>
        </div>
    </div>
  )
}

export default Navbar