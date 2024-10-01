import React from 'react'
import './style.css'
import { Button, Card } from 'react-bootstrap'
import CardImg1 from '../../../Assets/Images/pay-transparency.jpg'
import CardImg2 from '../../../Assets/Images/How-to-approach.jpg'
import CardImg3 from '../../../Assets/Images/pay-transparency.jpg'
import CardImg4 from '../../../Assets/Images/ai-interviews-human.jpg'
import CardImg5 from '../../../Assets/Images/reimagining.jpg'
import CardImg6 from '../../../Assets/Images/Could-a.jpg'
import CardImg7 from '../../../Assets/Images/AI and tech.jpg'
import CardImg8 from '../../../Assets/Images/The-Networking.jpg'
import CardImg9 from '../../../Assets/Images/How-to-choose-the.jpg'
import CardImg10 from '../../../Assets/Images/Hiring-seasonal.jpg'
import CardImg11 from '../../../Assets/Images/building-a-future.jpg'
import CardImg12 from '../../../Assets/Images/pay-transparency.jpg'
const LatestArticale = () => {
    const ArticaleCardData = [
        {
            id:1,
            imgSrc:CardImg1,
            Title:"Pay Transparency: A Game-Changer or a Risk?",
            description: "Imagine a company where employees feel valued, motivated, and empowered",
        },
        {
            id:2,
            imgSrc:CardImg2,
            Title:"How to approach the all important salary expectation question?",
            description: "Answering the all-important salary expectations question the wrong way can cost you a job offer.",
        },
        {
            id:3,
            imgSrc:CardImg3,
            Title:"Pay Transparency: How much do your colleagues make?",
            description: "Would you like to work for a business where everyone knows how much each other earns? No hushed conversations",
        },
        {
            id:4,
            imgSrc:CardImg4,
            Title:"Considering a career move??",
            description: "If you want to progress or even move into a new industry, browse our current vacancies to find your ideal job today.",
        },
        {
            id:5,
            imgSrc:CardImg5,
            Title:"AI Interviews: Human Skills for a Digital World",
            description: "What once was a handshake and a smile has now changed into a complex interplay of human potential and the preciseness of artificial intelligence",
        },
        {
            id:6,
            imgSrc:CardImg6,
            Title:"Reimagining the Interview: AI and Video Technology",
            description: "The traditional recruitment process, while fundamental, often falls short of delivering optimal results.",
        },
        {
            id:7,
            imgSrc:CardImg7,
            Title:"Should You Use A Recruitment Agency To Help With Your Job Search?",
            description: "Progressing in your career is exciting, moving on is daunting, and job hunting can be...tiresome.",
        },
        {
            id:8,
            imgSrc:CardImg8,
            Title:"AI and tech tools to help your efficiency and productivity in the workplace",
            description: "Juggling work deadlines, overflowing inboxes, and that ever-present feeling",
        },
        {
            id:9,
            imgSrc:CardImg9,
            Title:"The Networking Game: Unlocking",
            description: "Imagine this: You spend months applying for jobs, your resume is polished to perfection",
        },
        {
            id:10,
            imgSrc:CardImg10,
            Title:"How to find the best recruitment agency?",
            description: "So, you’ve identified that your organisation requires an additional set of skills ",
        },
        {
            id:11,
            imgSrc:CardImg11,
            Title:"How can hiring contract staff meet your fluctuating demands?",
            description: "Businesses across various industries often face fluctuating demands throughout the year.",
        },
        {
            id:12,
            imgSrc:CardImg12,
            Title:"Building a Future-Ready Workforce Through Upskilling",
            description: "It’s no surprise that the modern workforce is experiencing a progressive transformation.",
        },
    ]
  return (
    <>
      <div className='latestart'>
        <div className='container'>
        <div className='view-head'>
            <h1>Latest<span className='text-[#E37620]'> articles</span></h1>
        </div>
        <div className='all-cards-latest-articale'>
            {ArticaleCardData.map(articale =>(
                <Card className='la-card' key={articale.id}>
      <Card.Img variant="top" src={articale.imgSrc} />

      <Card.Body>
        <Card.Title>{articale.Title}</Card.Title>
        <Card.Text>{articale.description}</Card.Text>
        <Button variant="danger">Read articale</Button>
      </Card.Body>
    </Card>
            ))}
        </div>
        <div className='bottom-btn mt-12 mb-12 flex justify-center'>
            <button type='text' className='mbtn'>Load More</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default LatestArticale
