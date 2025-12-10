import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import MenuPreview from '../components/Menu_section'
import Reviews from '../components/Reviews'

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <MenuPreview />
            <Reviews />
        </div>
    )
}

export default Home
