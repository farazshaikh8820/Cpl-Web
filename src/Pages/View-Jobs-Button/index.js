import React, { useState } from 'react'
import './style.css'
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom';

const ViewJobButton = () => {

    let jobData = [
        {
            posted_at: "24 min ago",
            job_title: "Insurance Specialist (Banking)",
            job_category: [
                {
                    job_country: "Singapore",
                    job_type: "Permanent",
                    job_salary: "$0-4k",
                }
            ],
            job_description: "The client is a world's leading bank and they are looking to expand their team of insurance specialist to support their relationship managers.",

            job_roles: [
                {
                    job_Responsibility: "Conduct financial needs analysis to understand customers' financial goals",

                },
                {
                    job_Responsibility: "Provide financial product advisory to bank clients according to their needs",

                },
                {
                    job_Responsibility: "Adhere to compliance and regulatory standards",

                },
                {
                    job_Responsibility: "Engage in networking and marketing campaigns organised by the firm",

                }
            ],

            job_skills:[
                {
                    job_skills_Required: "Minimum Diploma required",
                },
                {
                    job_skills_Required: "Minimum 1 year of wealth management / insurance sales",
                },
                {
                    job_skills_Required: "Good effective communication & interpersonal skills",
                }
            ],

            job_info: "Only shortlisted candidates will be responded to, therefore if you do not receive a response within 14 days please accept this as notification that you have not been shortlisted.",
        }
    ]
    console.log("job data>>>>>>", jobData);


    return (
        <>
            <div className='ViewJobButton'>
                <Navbar />
                <div className='Job_Detail_Page'>
                    <div className='container_viewJob'>
                        <Link to="/jobs" className='back-to-jobs'>Back to job search</Link>
                        <div className='Job_Card_Detail'>
                            {jobData.map((item, index) => {
                                return (
                                    <div className='Job_Card_Content' key={index}>
                                        <div className='Posted_at'>
                                            {item.posted_at}
                                        </div>
                                        {/*---------------------------Head part---------------------------------*/}
                                        <div className='head_part'>
                                            <div className='Title_category'>
                                            <div className='Title_Content'>
                                                <h2>{item.job_title}</h2>
                                            </div>
                                            <div className='Job_Category'>
                                                {item.job_category.map((val, index) => {
                                                    return (
                                                        <div className='category_content'>
                                                            <span> {val.job_country}</span>
                                                            <span> {val.job_type}</span>
                                                            <span> {val.job_salary}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            </div>
                                            <div className='Apply_Now_Button'>
                                                <Link to='/Personal_Info' className='mbtn_view_Job'>Apply Now</Link>
                                            </div>
                                        </div>
                                        {/*---------------------------Ends Here-------------------------------------*/}
                                        {/* --------------------------Main Part Here------------------------------- */}
                                    <div className='Main_part'>
                                        <div className='Job_description'>
                                            <h3>Job Description</h3>
                                                <p>{item.job_description}</p>
                                        </div>

                                        <div className='Roles_Responsibility'>
                                            <h3>Roles & Responsibility</h3>
                                            <ul>
                                                {item.job_roles.map((val, index) => {
                                                    return (
                                                        <div>
                                                            <li>
                                                                {val.job_Responsibility}
                                                            </li>
                                                        </div>
                                                    )
                                                })}
                                            </ul>

                                        </div>

                                        <div className='Skills_Exp'>
                                         <h3>Skills and Experience required</h3>
                                        <ul>
                                            {item.job_skills.map((val, index) => {
                                                return(
                                                    <div>
                                                        <li>
                                                            {val.job_skills_Required}
                                                        </li>
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                        </div>
                                    </div>    
                                        {/* --------------------------Main Part End-------------------------------- */}
                                        {/* --------------------------Bottom Part End-------------------------------- */}
                                    <div className='info'>
                                        <p>{item.job_info}</p>
                                        <p>(EA:11C5502/R2199597)</p>
                                    </div>
                                        {/* --------------------------Bottom Part End-------------------------------- */}
                                        
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ViewJobButton
