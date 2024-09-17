import React from 'react'
import NavbarTop from '../../Components/NavbarTop'
import Navbar from '../../Components/Navbar'
import HeadJobSection from '../../Components/JobSection/HeadJobSection'
import MainjobSection from '../../Components/JobSection/MainjobSection'
import BottomJobSection from '../../Components/JobSection/BottomJobSection'

const Jobs = () => {
  return (
    <>
      <NavbarTop/>
      <Navbar/>
      <HeadJobSection/>
      <MainjobSection/>
      <BottomJobSection/>
    </>
  )
}

export default Jobs
