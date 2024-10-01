import React from 'react'
import './style.css'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'

const CompareSalary = () => {
    return (
        <>
        <Navbar/>
            <div className='compareSalary'>
                <div className='banner-part'>
                    <div className='container flex justify-center'>
                        <div className='salary-content-part'>
                            <h1>Salary calculator.</h1>
                            <p>Use the salary calculator to reveal industry benchmarks for pay, compiled using data from thousands of placements over the past year.</p>
                        </div>
                    </div>
                </div>
                <div className='explore-sb-cs'>
                    <div className='container flex justify-center'>
                        <div className='explore-form-cs'>
                            <form className='mform-cs'>
                                <div className='radio-field-wrap-cs'>
                                    <div className='explore-cs'><b>I want to explore:</b>
                                        <label>
                                            <input type='radio' name='exploreOption' value='earn' />
                                            How much I can earn
                                        </label>
                                        <label>
                                            <input type='radio' name='exploreOption' value='pay' />
                                            How much I should pay
                                        </label>
                                    </div>
                                </div>
                                <div className='Feild-part-cs'>
                                    <input type='text' placeholder='Job Location' className='Job-cs'></input>
                                    <input type='text' placeholder='Job Title' className='Job-cs'></input>
                                    <div className='job-btn-cs'>
                                        <button type='text' className='mbtn'> Search </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------------------------Popular salary search---------------------- */}
            <div className='similar-job-titles'>
                <div className='container'>
                    <div className='similar-job-title'>
                        <h2>Popular salary searches.</h2>
                    </div>
                    {/* ----------------------job-title-slider----------------------- */}
                    <div className='all-jobs'>
                    <div className='jobs'>Software Engineer</div>
                    <div className='jobs'>Financial Controller</div>
                    <div className='jobs'>Project manager</div>
                    <div className='jobs'>Senior Business Analyst</div>
                    <div className='jobs'>Finance Manager</div>
                    <div className='jobs'>Director</div>
                    <div className='jobs'>Product Manager</div>
                    <div className='jobs'>Business Analyst</div>
                    <div className='jobs'>Finance Director</div>
                    <div className='jobs'>Regulatory Compliance</div>
                    <div className='jobs'>Program Manager</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CompareSalary
