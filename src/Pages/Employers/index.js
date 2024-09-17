import React from 'react'
import NavbarTop from '../../Components/NavbarTop'
import Navbar from '../../Components/Navbar'
import EmployersMainNavbar from '../../Components/EmployerSection/EmployersMainnavbar'
import EmployersMainCard from '../../Components/EmployerSection/EmployerMainCard'
import HelpingYourBuisness from '../../Components/EmployerSection/HelpingYourBusiness'
import RecruitmentPart from '../../Components/EmployerSection/RecruitmentPart'
import CalcEmployer from '../../Components/EmployerSection/CalcEmployer'
import Trending from '../../Components/Trending'
import Carousel from '../../Components/Carousel'
import Footer from '../../Components/Footer'
const Employers = () => {
  return (
    <>
     <NavbarTop />
     <Navbar />
     <EmployersMainNavbar/>
     <EmployersMainCard/>
     <HelpingYourBuisness/>
     <RecruitmentPart/>
     <CalcEmployer/>
     <Trending/>
     <Carousel/>
     <Footer/>
    </>
  )
}

export default Employers
