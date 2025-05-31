import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
        const sideMenuRef = useRef();
    
        const openMenu = () => {
            sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    
        const closeMenu = () => {
            sideMenuRef.current.style.transform = 'translateX(16rem)'
        }
    
        const [isScroll, setIsScroll] = useState(false);
        useEffect(() => {
            window.addEventListener('scroll', () =>{
                if(scrollY > 50){
                    setIsScroll(true);
                }else{
                    setIsScroll(false);
                }
            })
        },[])

  return (
    <>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
      flex items-center justify-between z-50 ${isScroll ? "bg-pink-300 bg-opacity-50 backdrop-blur-lg shadow-sm": ""}`}>
        <a href="#top">
            {/* <Image src={assets.logo} 
            alt='' className = 'w-20 cursor-pointer mr-14' /> */}
            <h1 className="text-4xl font-bold text-gray-900 cursor-pointer bg-pink-50">

            OakSoe<span className="text-red-400">.</span>
            </h1>
        </a>
        <ul className={`hidden md:flex items-center 
        gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : 
            " bg-white shadow-sm bg-opacity-50"}`}>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            {/* <li><a href="#resume">Resume</a></li> */}
            <li><a href="#projects">My Projects</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>

        {/* ########## mobile menu ########## */}

        
      </nav>
    </>
  )
}

export default Navbar