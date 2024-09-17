import React from 'react'
import './style.css'
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom';

const ViewJobButton = () => {
    let jobData = [
        {
            posted_at: "24 min",
            job_title: "Insurance Specialist (Banking)",
            job_category:[
                {
                    job_country: "Singapore",
                    job_type:"Permanent",
                    job_salary:"$0-4k",
                }
            ],
            job_description:"Job Description"[
                {
                    job_description_text:"The client is a world's leading bank and they are looking to expand their team of insurance specialist to support their relationship managers."
                }
            ],
            job_roles:"Roles & Responsibility"[
                {
                    job_Responsibility:"Conduct financial needs analysis to understand customers' financial goals",
                }
            ],
            job_skills:"Skills and Experience required"[{
                job_skills_Required:"Minimum Diploma required",
            }],
        }
    ]
console.log("job data>>>>>>", jobData);


  return (
    <>
      <div className='ViewJobButton'>
        <Navbar/>
       <div className='Job_Detail_Page'>
        <div className='container'>
            <Link to="/jobs" className='back-to-jobs'>Back to job search</Link>
            <div className='Job_Card_Detail'>
                {jobData.map((item,index)=>{
                    <div className='Job_Card_Content' key={jobData}>
                        
                    </div>
                    
                })}
            </div>
        </div>
       </div>

      </div>
    </>
  )
}

export default ViewJobButton
