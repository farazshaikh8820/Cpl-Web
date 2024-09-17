import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './style.css'
import AboutUsImage from '../../../Assets/Images/about-us-banner.png'
import OurWorkImg from '../../../Assets/Images/our-work.jpg'
import OurStoryImg from '../../../Assets/Images/about-our-story.jpg'
import OurGroupImg from '../../../Assets/Images/our-group-capabilities.png'
import OurPurposeImg from '../../../Assets/Images/our-purpose.jpg'
import OurCommitmentsImg from '../../../Assets/Images/our-commitments.jpg'
import { Link } from 'react-router-dom'

const AboutUs = () => {

    return (
        <>
            {/* About us part here */}
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
                    <img src={AboutUsImage} alt='aboutUs' height='100%' width='100%' />
                </Col>
            </Row>
            {/* Ends here */}
            {/* Image with content starts here 01 */}
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
            {/* Image with content ends here 01*/}
            {/* Image with content starts here 02 */}
            <div className='about-wrapper'>
                <div className='about-box-content'>
                    <div className='container'>
                        <Row>
                            <Col md={6}>
                                <div className='About-bc-content'>
                                    <h2>Our <span className='text-[#E37620]'>Story.</span></h2>
                                    <p>Our devotion to Go Beyond expectations in everything we do has helped us establish a strong reputation over the years.</p>
                                    <button type='text' className='mbtn'>More about our story</button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='About-bc-img'>
                                    <img src={OurStoryImg} alt='OurStoryImg' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* Image with content ends here 02*/}
            {/* Image with content starts here 03 */}
            <div className='about-wrapper'>
                <div className='about-box-content'>
                    <div className='container'>
                        <Row>
                            <Col md={6}>
                                <div className='About-bc-img'>
                                    <img src={OurGroupImg} alt='OurGroup' />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='About-bc-content'>
                                    <h2>Our <span className='text-[#E37620]'>group capabilities.</span></h2>
                                    <p>Through our three distinct entities we bring over thirty years of expertise and experience in advisory solutions, resourcing solutions and managed services.</p>
                                    <button type='text' className='mbtn'>More about our group</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* Image with content ends here 03*/}
            {/* Image with content starts here 04 */}
            <div className='about-wrapper'>
                <div className='about-box-content'>
                    <div className='container'>
                        <Row>
                            <Col md={6}>
                                <div className='About-bc-content'>
                                    <h2>Our <span className='text-[#E37620]'>Purpose</span></h2>
                                    <p>We’re in the business of improving lives. Our dedication to candidates and clients is what keeps us going everyday.</p>
                                    <button type='text' className='mbtn'>More about our Purpose</button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='About-bc-img'>
                                    <img src={OurPurposeImg} alt='OurPurpose' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* Image with content ends here 04*/}
            {/* Image with content starts here 05*/}
            <div className='about-wrapper'>
                <div className='about-box-content'>
                    <div className='container'>
                        <Row>
                            <Col md={6}>
                                <div className='About-bc-img'>
                                    <img src={OurCommitmentsImg} alt='OurCommitments' />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='About-bc-content'>
                                    <h2>Our <span className='text-[#E37620]'>commitments.</span></h2>
                                    <p>We always strive to make a positive difference in terms of our communities, sustainability and Diversity & Inclusion.</p>
                                    <button type='text' className='mbtn'>More about our commitments</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* Image with content ends here 05*/}
        </>
    )
}

export default AboutUs
