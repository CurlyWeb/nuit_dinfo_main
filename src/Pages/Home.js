import React from 'react'
import Index from '../components/From/Index'
import TopSection from "./../components/TopSection"
import Navbar from './Navbar'
function Home() {
    return (
        <div>
            <Navbar/>
            <TopSection />
            <Index />
        </div>
    )
}

export default Home
