import React from 'react'
import './style.css'
import TaImageRight from '../../../Assets/Images/sc-mobile-ie.webp'
import { Link } from 'react-router-dom'
const BottomJobSection = () => {
    return (
        <>
            <div className='calc-employer'>
                <div className='container'>
                    <div className='calc-card'>
                        <div className='calc-content'>
                            <h2>2024 Salary Guide</h2>
                            <p>Compare salaries for specific roles across different industries and areas of expertise.</p>
                            <Link to='/CompareSalary' className='mainNavbar-button mbtn'>Compare Salary</Link>
                        </div>
                        <div className='calc-img'>
                            <img src={TaImageRight} />
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------------------Footer here--------------------- */}
            <div className='footer-nav pb-10'>
                <div className='container'>
                    <div className='footer-parent'>
                    <div className='footer-cp'>@ 2024 Saanvi Nexus</div>
                        <ul className='bottom-job-ul'>
                            <li>Employers</li>
                            <li>Jobs</li>
                            <li>Resources</li>
                            <li>About</li>
                            <li>Legal</li>
                            <li>Manage your cookies</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BottomJobSection
