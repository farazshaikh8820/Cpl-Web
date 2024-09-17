import React from 'react'
import NavbarTop from '../../Components/NavbarTop'
import Navbar from '../../Components/Navbar'
import HeroResource from '../../Components/ResourcePart/HeroResource'
import MainResource from '../../Components/ResourcePart/MainResource'
import CalcPart from '../../Components/ResourcePart/CalcPart'
import LatestArticale from '../../Components/ResourcePart/LatestArticale'
import Footer from '../../Components/Footer'
const Resources = () => {
  return (
    <>
      <NavbarTop/>
      <Navbar/>
      <HeroResource/>
      <MainResource/>
      <CalcPart/>
      <LatestArticale/>
      <Footer/>
    </>
  )
}

export default Resources
