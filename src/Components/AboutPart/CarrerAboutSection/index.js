import React from 'react'
import './style.css'
import CarrerImage from '../../../Assets/Images/carrers-at-morgan-mckinley.png'
import { Link } from 'react-router-dom';

const CarrerAbout = () => {
  return (
    <>
      <div className='Carrer'>
        <div className='container'>
            <div className='ceo-speach-image'>
                {/* Ceo image */}
                <div className='ceo-image'>
                    <img src={CarrerImage} alt='career Img' />
                </div>
                {/* ceo-speach */}
                <div className='Ceo-speach '>
                    <h2 className='h2 '>Careers.</h2>
                    <p>We put our people first, so our people go further. Why not further your career with us? Join our team at Morgan McKinley and together we’ll go way beyond above and beyond.</p>
                    
                    <span><Link to='https://www.saanvinexus.com/' className='mainNavbar-button mbtn'>Work at Saanvi Nexus</Link></span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CarrerAbout
