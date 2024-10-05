import React from 'react'
import MainNavbar from '../../Components/MainNavbar';
import MainCards from '../../Components/MainCards';
import InvestingTime from '../../Components/InvestingTime';
import CeoSpeach from '../../Components/CeoSpeach';
import Trending from '../../Components/Trending';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';
import NavbarTop from '../../Components/NavbarTop';
import Navbar from '../../Components/Navbar';


const Home = () => {
    return (
        <>
            <NavbarTop />
            {/* <Navbar /> */}
            <MainNavbar />
            <MainCards />
            <InvestingTime />
            <CeoSpeach />
            <Trending />
            <Carousel />
            <Footer />
        </>
    )
}

export default Home
