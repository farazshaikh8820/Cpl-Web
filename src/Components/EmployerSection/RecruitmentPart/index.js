import React from 'react'
import './style.css'
import Card1Img from '../../../Assets/Images/technology-recruitment-solutions.png'
import Card2Img from '../../../Assets/Images/life-sciences-engineering-recruitment-solutions.png'
import Card3Img from '../../../Assets/Images/project-change-recruitment-solutions.png'
import Card4Img from '../../../Assets/Images/business-support-recruitment-solutions.png'
import Card5Img from '../../../Assets/Images/accounting-finance-recruitment-solutions.png'
import Card6Img from '../../../Assets/Images/banking-financial-services-recruitment-solutions.png'
import Card7Img from '../../../Assets/Images/human-resources.png'
import Card8Img from '../../../Assets/Images/legal-risk-compliance.png'
import Card9Img from '../../../Assets/Images/sales-marketing.png'
import Card10Img from '../../../Assets/Images/procurement-supply-chain.png'
import { Button, Card } from 'react-bootstrap'
import Slider from 'react-slick'
import Cards from '../../Mobile-cards'
const RecruitmentPart = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
};

  const cards = [
    { ImageUrl: Card1Img, title: 'Technology Recruitment.', description: 'Description 1' },
    { ImageUrl: Card2Img, title: 'Life Sciences Recruitment.', description: 'Description 2' },
    { ImageUrl: Card3Img, title: 'Projects & Change Recruitment.', description: 'Description 3' },
    { ImageUrl: Card4Img, title: 'Business Support Recruitment.', description: 'Description 4' },
    { ImageUrl: Card5Img, title: 'Accounting & Finance Recruitment.', description: 'Description 5' },
    { ImageUrl: Card6Img, title: 'Banking & Financial Recruitment.', description: 'Description 6' },
    { ImageUrl: Card7Img, title: 'Human Resource Recruitment.', description: 'Description 7' },
    { ImageUrl: Card8Img, title: 'Legal, Risk Recruitment.', description: 'Description 8' },
    { ImageUrl: Card9Img, title: 'Sales & Marketing Recruitment.', description: 'Description 9' },
    { ImageUrl: Card10Img, title: 'Supply Chain Recruitment.', description: 'Description 10' },
    
];
  return (
    <>
      <div className='recruitment-part'>
        <div className='container'>
          <div className='recruitment-content'>
            <h1>Our recruitment <span className='text-[#E37620]'>expertise.</span></h1>
            <p>Our reputation is built on finding you the right people. Talented people who stand out, who make a real difference. With the right people, your business can realise its ambitions and go further than you ever thought possible.</p>
          </div>
          {/* More to be done */}
          <div className='card-slider'>
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className='card'>
                        <img src={card.ImageUrl} alt=''/>
                        <h3>{card.title}</h3>
                        {/* <p>{card.description}</p> */}
                    </div>
                ))}
            </Slider>
        </div>
        </div>
      </div>
    </>
  )
}

export default RecruitmentPart