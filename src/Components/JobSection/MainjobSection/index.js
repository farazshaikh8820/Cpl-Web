import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
const MainjobSection = () => {
    const navigate = useNavigate()
    
    const handleJobDetail = () => {
        navigate(`/ViewJobButton`)
        console.log("successfuly navigated!");
        
    }

   

    return (
        <>
            <div className='mainjobsection'>
                <div className='container'>
                    {/* Head content  */}
                    <div className='mainjob'>
                        <div className='heading-part-left'>
                            <h1>Latest job opportunities</h1>
                        </div>
                        <div className='heading-part-right'>
                            <a href='/Jobs'>View All Jobs</a>
                        </div>
                    </div>
                    {/* Head content ends */}
                    <div className='all-cards'>
                        {/* Card-1 */}
                    <div className='ljcard ' onClick={handleJobDetail}>
                        <h3>Project Engineer - Equipment</h3>
                        <div className='job-info'>
                            <span className='lj-location'>Dublin</span>
                            <span className='lj-type'>Contract</span>
                            <span className='lj-salary'>Competitive</span>
                        </div>
                        <div className='lj-bottom'>
                                <div className='lj-posted-wrap'>
                                    <div className='posted-new'>New</div>
                                    <div className='posted-on'>20 minutes ago</div>
                                </div>
                                <button className='mbtn mbtn-bottom' onClick={handleJobDetail}>View</button>
                                
                        </div>
                    </div>
                    {/* Card-2 */}
                    <div className='ljcard' onClick={handleJobDetail} >
                        <h3>Electrical Operator</h3>
                        <div className='job-info'>
                            <span className='lj-location'>Cork</span>
                            <span className='lj-type'>Permanent</span>
                            <span className='lj-salary'>30k-40k</span>
                        </div>
                        <div className='lj-bottom'>
                                <div className='lj-posted-wrap'>
                                    <div className='posted-new'>New</div>
                                    <div className='posted-on'>40 minutes ago</div>
                                </div>
                                {/* <Link to='ViewJobButton'className='mbtn mbtn-bottom'>View</Link> */}
                                <button className='mbtn mbtn-bottom' onClick={handleJobDetail}>View</button>
                        </div>
                    </div>
                    {/* Card-3 */}
                    <div className='ljcard' onClick={handleJobDetail}>
                        <h3>Technology Architect Manager - Financial Services</h3>
                        <div className='job-info'>
                            <span className='lj-location'>Dublin</span>
                            <span className='lj-type'>Permanent</span>
                            <span className='lj-salary'>70k-90k</span>
                        </div>
                        <div className='lj-bottom'>
                                <div className='lj-posted-wrap'>
                                    <div className='posted-new'>New</div>
                                    <div className='posted-on'>31 minutes ago</div>
                                </div>
                                <button className='mbtn mbtn-bottom' onClick={handleJobDetail}>View</button>
                        </div>
                    </div>
                    {/* Card-4 */}
                    <div className='ljcard' onClick={handleJobDetail}>
                        <h3>Associate, Project Manager - COO Office</h3>
                        <div className='job-info'>
                            <span className='lj-location'>Hong Kong</span>
                            <span className='lj-type'>Permanent</span>
                            <span className='lj-salary'>41k-45k</span>
                        </div>
                        <div className='lj-bottom'>
                                <div className='lj-posted-wrap'>
                                    <div className='posted-new'>New</div>
                                    <div className='posted-on'>53 minutes ago</div>
                                </div>
                                <button className='mbtn mbtn-bottom' onClick={handleJobDetail}>View</button>
                        </div>
                    </div>
                    {/* Card-5 */}
                    <div className='ljcard' onClick={handleJobDetail}>
                        <h3>Linux Engineer</h3>
                        <div className='job-info'>
                            <span className='lj-location'>Dublin</span>
                            <span className='lj-type'>Permanent</span>
                            <span className='lj-salary'>Competitive</span>
                        </div>
                        <div className='lj-bottom'>
                                <div className='lj-posted-wrap'>
                                    <div className='posted-new'>New</div>
                                    <div className='posted-on'>22 hours ago</div>
                                </div>
                                <button className='mbtn mbtn-bottom' onClick={handleJobDetail}>View</button>
                        </div>
                    </div>
                    {/* Card-6 */}
                    <div className='ljcard' onClick={handleJobDetail}>
                        <h3>Senior New Product Development Engineer</h3>
                        <div className='job-info'>
                            <span className='lj-location'>limerick</span>
                            <span className='lj-type'>Permanent</span>
                            <span className='lj-salary'>Competitive</span>
                        </div>
                        <div className='lj-bottom'>
                                <div className='lj-posted-wrap'>
                                    <div className='posted-new'>New</div>
                                    <div className='posted-on'>23 hours ago</div>
                                </div>
                                <button className='mbtn mbtn-bottom' onClick={handleJobDetail}>View</button>
                        </div>
                    </div>
                    {/* cards end here */}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default MainjobSection
