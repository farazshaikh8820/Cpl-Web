import React from 'react'
import './style.css'
import EmployersBgImage from '../../../Assets/Images/employer_bg_image.png'
import { Link } from 'react-router-dom'
const EmployersMainNavbar = () => {
  return (
    <>
     <div className='EmployersMainNavbar' >
        <div className='bg-img'>
            <img src={EmployersBgImage}/>
        </div>
        <div className='EmployersContent'>
          <div className='Employercontainer'>
            <h1>It's time to find your human edge.</h1>
            <p>Find the right people to help your business thrive - today and in the future. We provide a full range of flexible Talent Services, so whatever your workforce needs are, we are well placed to help. It’s time to <b>pioneer through your people.</b></p>
            {/* <button type='text' className='mbtn'><b>Hire Talent</b></button> */}
            <Link to='/HireTalent' className='employers-mainNavbar-button mbtn'>Hire Talent</Link>
          </div>
        </div>
     </div>
    </>
  )
}

export default EmployersMainNavbar
