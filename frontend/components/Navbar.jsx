import React, { useState } from 'react'
import logo from '../src/assets/logo.jpg'
import menu_icon from '../src/assets/menu_icon.svg'
import { Link } from "react-router-dom";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    function otherfuntion() {
        if (menuOpen) { setMenuOpen }
    }
    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-black/70 py-5 px-6 flex items-center justify-around z-30">

                {/* Left Section */}
                <div className="flex items-center">
                    {/* <img src={logo} alt="logo" className="w-16" /> */}
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                        OvenKissed <span className="text-amber-600">Cats Cafe</span>
                    </h2>
                </div>

                {/* Middle Menu (hidden on mobile) */}
                <div className="hidden lg:flex">
                    <ul className="flex text-white gap-8 text-lg">
                        <a href='/' className="cursor-pointer hover:text-amber-500">Home</a>
                        <a href='/#about' className="cursor-pointer hover:text-amber-500">About</a>
                        <a href='/menu' className="cursor-pointer hover:text-amber-500">Menu</a>
                        <a href='/#reviews' className="cursor-pointer hover:text-amber-500">Reviews</a>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex items-center justify-around gap-1">
                    {/* Menu Icon */}
                    <img
                        src={menu_icon}
                        alt="menu icon"
                        className="invert w-7 cursor-pointer lg:hidden md:w-8"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />

                    {/* Book button (hidden on mobile) */}
                    <a href="/booktable" className="">
                        <button className="hidden lg:block bg-amber-800 px-4 py-2 rounded-sm text-white hover:bg-amber-700">
                            Book a table
                        </button>
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 z-50 bg-black/90 transition-all duration-300 ease-in-out mt-18
    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
  `}
            >

                <ul className="flex flex-col text-white gap-5 text-center text-lg py-5">
                    <a href='/' className="cursor-pointer hover:text-amber-500"
                        onClick={() => setMenuOpen(!menuOpen)}>Home</a>
                    <a href='#about' className="cursor-pointer hover:text-amber-500"
                        onClick={() => setMenuOpen(!menuOpen)}>About</a>
                    <a href='/menu' className="cursor-pointer hover:text-amber-500"
                        onClick={() => setMenuOpen(!menuOpen)}>Menu</a>
                    <a href='#reviews' className="cursor-pointer hover:text-amber-500"
                        onClick={() => setMenuOpen(!menuOpen)}>Reviews</a>
                    <br />
                    <a href='/booktable' className="cursor-pointer text-amber-500"
                        onClick={() => setMenuOpen(!menuOpen)}>BOOK A TABLE</a>
                    <a href='/cats' className="cursor-pointer text-amber-500"
                        onClick={() => setMenuOpen(!menuOpen)}>MEET OUR CATS</a>
                </ul>
            </div>

        </>
    )
}

export default Navbar
