import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
const Personal_Info = () => {
    const [personalTab, setPersonalTab] = useState("PERSONAL_DETAILS")
    return (
        <>
            <div className='Personal_info'>
                <div className='container_viewJob'>
                    <Link to="/ViewJobButton" className='back-to-jobs'>View Job Details</Link>
                    <div className='Apply_job'>
                        <Row>
                            <Col md={4} className='p-0'>
                                <div className='left_side'>
                                    <h3>Applying to Insurance Specialist (Banking)</h3>
                                    <div className='job_category'>
                                        <div className='job_info'>
                                            <span>Singapore</span>
                                            <span>Permanent</span>
                                            <span>$0-4k pm</span>
                                        </div>
                                        <div className='job_ref'>
                                            <span>JN -092024-1968645</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='left_side'>
                                    <h3>Applying to Insurance Specialist (Banking)</h3>
                                    <div className='job_category'>
                                        <div className='job_info'>
                                            <span>Singapore</span>
                                            <span>Permanent</span>
                                            <span>$0-4k pm</span>
                                        </div>
                                        <div className='job_ref'>
                                            <span>JN -092024-1968645</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8} className='p-0'>
                                <div class="form-container">
                                    <Row>
                                        <Col md={12}>

                                            <div className='Personal_tab_Upload_Cv'>
                                                <div className='personal_content'>
                                                    <span className='num'>1</span>
                                                    <span>Personal Details</span>
                                                </div>
                                                <div className='CV_content'>
                                                    <span className='num'>2</span>
                                                    <span>Upload CV</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            {personalTab === "PERSONAL_DETAILS" ? (<div>
                                                <h2 className='personal_details_h2'>Personal Details</h2>
                                                <form>
                                                    <div className='first_Name_last_Name'>
                                                        <div class="form-group">
                                                            <label for="firstName">First Name</label>
                                                            <input type="text" id="firstName" name="firstName" placeholder="" />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="lastName">Last Name</label>
                                                            <input type="text" id="lastName" name="lastName" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="email">Email Address</label>
                                                        <input type="email" id="email" name="email" placeholder='' />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="confirmEmail">Confirm Email Address</label>
                                                        <input type="email" id="confirmEmail" name="confirmEmail" placeholder='' />
                                                    </div>
                                                    <div className='personal_details_button'>
                                                    <button type="submit" className='mbtn' onClick={() => setPersonalTab("UPLOAD_CV")}>Next</button>
                                                    </div>
                                                </form>
                                            </div>) : ""}
                                            {personalTab === "UPLOAD_CV" ? (<div>
                                                <h2 className='upload_cv_h2'>Upload CV</h2>
                                                <div className='upload_cv_wrap'>
                                                    <div className='up_load-cv '>
                                                        <label>Upload CV</label>
                                                    </div>
                                                    <span className='upload_cv_text'>
                                                        <p>Files must be less than 5 MB</p>
                                                        <p>Allowed file types: pdf, docx, doc</p>
                                                    </span>
                                                </div>
                                                <div class="checkbox-container">
                                                    <input type="checkbox" id="privacy-checkbox"/>
                                                        <label for="privacy-checkbox">
                                                            I understand and accept the privacy statement, which governs my use of Morgan McKinley services.
                                                        </label>
                                                </div>
                                                    <div className='checkbox-buttons'>
                                                        <Link to="/ViewJobButton" className='chk_box_mbtn_back'>Go Back</Link>
                                                        <button type='text' className='chk_box_mbtn_apply '>Apply Now</button>
                                                    </div>
                                            </div>) : ""}
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Personal_Info
