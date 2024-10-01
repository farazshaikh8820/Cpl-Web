import React from 'react'
import './style.css'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'

const HireTalent = () => {
  return (
    <>
    <Navbar/>
      <div className='compareSalary'>
                <div className='banner-part'>
                    <div className='container flex justify-center'>
                        <div className='salary-content-part'>
                            <h1>Looking to Hire</h1>
                            <p>We Go Beyond to find you the right skills and people.</p>
                        </div>
                    </div>
                </div>
                <div className='explore-sb'>
                    <div className='container flex justify-center overflow-visible'>
                        <div className='explore-form'>
                            <form className='mform'>
                               <h3>Type of hire</h3>
                               <input type='text' placeholder='Type of position you need to fill' className='hire'></input>
                               <input type='text' placeholder='Any Specific details?' className='hire'></input>
                               <button type='text' className='mainNavbar-button mbtn px-10'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
    </>
  )
}

export default HireTalent
