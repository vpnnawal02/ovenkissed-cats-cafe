import React from 'react'
import header_bg from '../src/assets/header_bg.jpg'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center items-center w-full overflow-hidden justify-center' style={{ backgroundImage: `url(${header_bg})` }} id='header'>
            <Navbar />
            <div className="flex flex-col justify-center items-center gap-10 h-[80vh] ">
                <h2 className='text-white text-3xl font-bold text-center w-[80%] mt-30 md:text-6xl md:mt-50 md:w-[60%] '>WHERE HANDCRAFTED COFFEE, GENTLE PURRS, PEACEFUL MOMENTS BLEND PERFECTLY</h2>
                <div className="flex gap-8 mt-20">
                    <a href="/menu" className='text-white font-bold border rounded-sm py-2 px-6 hover:bg-amber-500 hover:border-amber-500 duration-200'>Menu</a>
                    <a href="/cats" className='text-white bg-amber-700 font-bold rounded-sm py-2 px-6 hover:bg-amber-500 duration-200'>Meet Our Cats</a>
                </div>
            </div>
        </div>
    )
}

export default Header
