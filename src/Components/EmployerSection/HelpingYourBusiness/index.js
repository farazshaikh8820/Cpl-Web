import React from 'react'
import './style.css'
import { Col, Row } from 'react-bootstrap'
import helpingImage from '../../../Assets/Images/helping-your-business-evolve_0.jpg'
const HelpingYourBuisness = () => {
  return (
    <>
      <div className='helpingyourbuisness'>
        <div className='container'>
            <Row>
                <Col md={6}>
                <div className='Image-Side'>
                    <img src={helpingImage}/>
                </div>
                </Col>
                <Col md={6}>
                    <div className='Content-Side'>
                        <div className='helping-content'>
                            <h1>Helping your business <span className='text-[#E37620]'>evolve.</span></h1>
                            <ul>
                                <li>Placements with over <span className='text-[#E37620]'>5,000 </span>clients each year</li>
                                <li>Over<span className='text-[#E37620]'> 1.5 million</span> qualified candidates</li>
                                <li><span className='text-[#E37620]'>30+</span>years of experience</li>
                                <li><span className='text-[#E37620]'>800+</span>expert consultants</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
            </div> 
      </div>
    </>
  )
}

export default HelpingYourBuisness
