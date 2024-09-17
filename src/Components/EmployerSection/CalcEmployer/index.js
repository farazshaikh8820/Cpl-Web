import React from 'react'
import './style.css'
import TaImageRight from '../../../Assets/Images/sc-mobile-ie.webp'
import { Link } from 'react-router-dom'
const CalcEmployer = () => {
    return (
        <>
            <div className='calc-employer'>
                <div className='container'>
                    <div className='calc-card'>
                        <div className='calc-content'>
                            <h2>2024 Salary Guide</h2>
                            <p>Find out how much you should be paying your employees this year based on industry benchmarks.</p>
                            <Link to='/CompareSalary' className='mainNavbar-button mbtn'>View Salary</Link>
                        </div>
                        <div className='calc-img'>
                            <img src={TaImageRight} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='ArrFreeConsultans'>
                <div className='container'>
                    <div className='ArrFreeContent'>
                    <h2>Not sure where to start? Reach out.</h2>
                    <button type='text' className='ArrFreebtn'>Arrange free consultation</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalcEmployer
