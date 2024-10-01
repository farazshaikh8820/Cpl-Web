import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TaImage1 from '../../Assets/Images/recruitment-process-new.webp'
import TaImageSm from '../../Assets/Images/how-to-ask-for-a-pay-rise.webp'
import TaImageSmSecond from '../../Assets/Images/cloud-hiring.webp'
import TaImageRight from '../../Assets/Images/sc-mobile-ie.webp'
import './style.css'
import { Link, NavLink } from 'react-router-dom';
const Trending = () => {
  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='Trending-Content'>
            <h2 className='h2'>Trending advice and resources.</h2>
          </div>
        </div>
      </section>
      <Container>
        <Row className='main-row-trending'>
          <Col md={8}>
            <Row>
              <Col md={12} className='m-2'>
                  <div className='card-wrap'>
                    <div className='ta-card ta-card-lg'>
                      <img src={TaImage1} />

                      <div className='ta-card-content'>
                        <span className='ta-tag'>Hiring process</span>
                        <h2 className='h2'>Recruitment Process: How To Make Better Hires In 7 Steps</h2>
                        <p>In a tough hiring climate, it is important that your recruitment process is as good as it can possibly be if you are going to hire the most talented people.</p>
                      </div>
                    </div>
                  </div>
              </Col>
               {/* small cards */}
              <Col md={6}>
                <div className='card-wrap my-2'>
                  <div className='ta-card ta-card-sm'>
                    <img src={TaImageSm} />
                    <div className='ta-card-content-small-img'>
                        <span className='ta-tag'>Career Advice</span>
                        <h2 className='h2'>How to ask for a pay rise?</h2>
                        <p>You’re good at your job, you may even be great at it. You’re an integral member of the team..</p>
                      </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
              <div className='card-wrap my-2'>
                  <div className='ta-card ta-card-sm'>
                    <img src={TaImageSmSecond} />
                    <div className='ta-card-content-small-img'>
                        <span className='ta-tag'>Hiring process</span>
                        <h2 className='h2'>Could hiring flexible contractors be the best decision your business makes?</h2>
                        <p>In the past few years, vast numbers of companies have been engaging with recruitment agencies in order to hire short term, flexible resources who can help them be more agile in their specific situation.</p>
                      </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4} className='flex'>
            <div className='sg-calc-card'>
              <div className='sg-calc-content'>
              <h2>2024 Salary Guide</h2>
              <p>Compare salaries for specific roles across different industries and areas of expertise.</p>
              <Link to='/CompareSalary' className='mainNavbar-button mbtn'>Compare Salary</Link>
              </div>
              <div className='sg-calc-img'>
              <img src={TaImageRight}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='container'>
      <div className='button mt-12 flex justify-center mb-14'>
        <NavLink to='/Resources' className='mainNavbar-button mbtn'>View more Resource</NavLink>
      </div>
      </div>
    </>
  )
}

export default Trending
