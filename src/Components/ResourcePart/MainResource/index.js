import React from 'react'
import './style.css'
import { Col, Row } from 'react-bootstrap'
import LeftImg from '../../../Assets/Images/7-key.jpg'
import BottomRightImage from '../../../Assets/Images/recruitment-process.jpg'
const MainResource = () => {
    return (
        <>
            <div className='Main-section'>
                <div className='container'>
                    <div className='featured-articles'>
                        {/* View-header  */}
                        <div className='view-header'>
                            <h1>Featured <span className='text-[#E37620]'>articles</span></h1>
                        </div>
                        {/* View-header ends */}
                        {/* View-content here */}
                        <Row>
                            <Col md={8}>
                                <div className='feature-left'>
                                    <img src={LeftImg} alt='leftImg' />
                                    <div className='leftImg-content'>
                                        <h2>7 key recruitment challenges and how to overcome them in 2024</h2>
                                        <div className='read-info'>1 Mins Read</div>
                                        <button type='text' className='mbtn'>Read article</button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Col md={12}>
                                        <div className='feature-Right-top'>
                                            <div className='top-img'>
                                          <h3>Time to hire next employee</h3>
                                          <button type='text' className='mbtn'>Get Started</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                       <div className='feature-Right-bottom'>
                                        <div className='bottom-img'>
                                            <img src={BottomRightImage} alt='bottom img'/>
                                            <h3>Recruitment Process:
                                            How To Make Better Hires In 7 Steps</h3>
                                            <div className='read-info'>1 Mins Read</div>
                                            <button type='text' className='mbtn'>Read article</button>
                                        </div>
                                       </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* View-content here ends */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainResource
