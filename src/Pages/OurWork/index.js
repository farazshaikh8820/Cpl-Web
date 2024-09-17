import React from 'react'
import './style.css'
import { Col, Row } from 'react-bootstrap'
import OurWorkImg from '../../Assets/Images/our-work.jpg'
import MainCards from '../../Components/MainCards'
import { Link } from 'react-router-dom'
import InvestingTime from '../../Components/InvestingTime'
import Carousel from '../../Components/Carousel'
import Footer from '../../Components/Footer'


const OurWork = () => {
  return (
    <>
    {/* ---------------------------About part----------------------------- */}
      <Row>
        <Col md={6} className='bg-[#3E3552] p-0'>
            <div className='content-part'>
                <div className='About-Content'>
                    <h1><span className='text-[#f5c9bf]'>About</span> us.</h1>
                    <p>We are a global talent services company, offering the full spectrum of solutions to meet your resourcing needs. With offices in 10 countries, each and every one of our 1000+ employees shares a belief in the power of helping others realise their goals. Because when you succeed,<b>we succeed too.</b></p>
                </div>
            </div>
        </Col>
        <Col md={6} className='p-0'>
            <img src={OurWorkImg} alt='aboutUs' height='100%' width='100%'/>
        </Col>
      </Row>
      {/* ------------------Main Cards--------------------------- */}
      <MainCards/>
      {/* -----------------About wrapper---------------------- */}
      <div className='about-wrapper'>
                <div className='about-box-content'>
                    <div className='container'>
                        <Row>
                            <Col md={6}>
                                <div className='About-bc-img'>
                                    <img src={OurWorkImg} alt='OurWork' />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='About-bc-content'>
                                    <h2>Our <span className='text-[#E37620]'>work.</span></h2>
                                    <p>Our world revolves around talented people. Company shapers. Relationship builders. People who make a difference.</p>
                                    <Link to='/OurWork' className='mainNavbar-button mbtn'>More about what to do</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* ----------------------Investing time------------------------- */}
            <InvestingTime/>
            {/* ---------------------Carousel--------------------------------- */}
            <Carousel/>
            {/* -------------------Footer------------------------------- */}
            <Footer/>
    </>
  )
}

export default OurWork
