import React from 'react'
import TaImageRight from '../../../Assets/Images/sc-mobile-ie.webp'
import { Link } from 'react-router-dom'
const CalcPart = () => {
  return (
    <>
    <div className='calc-employer'>
                <div className='container'>
                    <div className='calc-card'>
                        <div className='calc-content'>
                            <h2>Looking for real-world salary data?</h2>
                            <p>Use our 2024 Salary Guide.</p>
                            <Link to='/CompareSalary' className='mainNavbar-button mbtn'>Find Salary</Link>
                        </div>
                        <div className='calc-img'>
                            <img src={TaImageRight} />
                        </div>
                    </div>
                </div>
            </div>
      
    </>
  )
}

export default CalcPart
