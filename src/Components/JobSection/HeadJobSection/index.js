import React from 'react'
import './style.css'
const HeadJobSection = () => {
  return (
    <>
      <div className='HeadJobSection'>
        <div className='HeadJobBanner'>
            <div className='banner-content'>
                <div className='container'>
                    <div className='head-container'>
                        <h1>Find your dream job!</h1>
                        <p>We offer a wide range of job opportunities across various industries. Apply now and take the first step towards your dream career.</p>
                        <div className='job-search-wrapper'>
                            <div className='job-search-form'>
                                <div className='job-search-feild'>
                                    <input id='job-Search' name='keyword' type='text' placeholder='Search by title,skill or keyword'></input>
                                    <input id='job-title' name='keyword' type='text' placeholder='Job location'></input>
                                    <div className='job-btn'>
                                    <button type='text' className='mbtn'> Search </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeadJobSection
