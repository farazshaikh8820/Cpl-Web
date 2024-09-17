import React from 'react'
import './style.css'
import CeoImage from '../../Assets/Images/ceo-speach-images.webp'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const CeoSpeach = () => {
  return (
    <>
    <div className='Ceo'>
        <div className='container'>
            <div className='ceo-speach-image'>
                {/* Ceo image */}
                <div className='ceo-image'>
                    <img src={CeoImage} />
                </div>
                {/* ceo-speach */}
                <div className='Ceo-speach '>
                    <h2 className='h2 '>"It's all about<br/>the people."</h2>
                    <div className='speach-author my-12'>- Ger Fitzgerald, CEO Morgan McKinley</div>
                    <p>We put our people first, so our people go further. Join our team at Morgan McKinley and together we’ll go way beyond above and beyond.</p>
                    
                    <span><Link to='https://www.saanvinexus.com/' className='mainNavbar-button mbtn'>Work at Saanvi Nexus</Link></span>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default CeoSpeach
