import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

const MaiNavbar = () => {
  return (
    <>
      <div className='mainNavbar'>
        <div className='mainNavbar-content'>
          <h2 className='h text-[68px] leading-[115%] mb-[50px] flex justify-center text-center'><b>Talent Services Beyond Expectations.</b></h2>
          <div className='mainNavbar-buttons flex justify-center font-bold gap-6'>
            <Link to="/Jobs" className="mainNavbar-button mbtn">
              I am a Job seeker
            </Link>

           <Link to="/Employers" className='mainNavbar-button mbtn'>
           I am an Employer
           </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MaiNavbar
