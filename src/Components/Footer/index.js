import React from 'react'
import './style.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
     <div className='footer'>
        <div className='container'>
            {/* go-beyond */}
            <div className='go-beyond'>
                {/* text */}
                <span className='go-beyond-text'>Go Beyond all expectations.</span>
                {/* job btn */}
                <div className='go-beyond-both-btns'>
                <Link to='/jobs' className='mainNavbar-button mbtn'>Find a Job</Link>
                {/* talent btn */}
                <Link to='/HireTalent' className='mainNavbar-button mbtn'>Find a Talent</Link>
                </div>
            </div>
            {/* go-beyond ends here */}
                <div className='all-nav'>
            {/* nav-main */}
            <div className='main-nav'>
                <div>logo here</div>
                <div className='nav-social'>
                    <a className='forced-color-adjust-none' href='https://www.linkedin.com/company/saanvinexus/posts/?feedView=all'>
                        <LinkedInIcon />
                    </a>
                    <a href='https://www.instagram.com/life.at.sannvinexus/'>
                        <InstagramIcon />
                    </a>
                    <a href='https://www.facebook.com/lifeatsaanvinexus/?locale=ta_IN'>
                        <FacebookIcon/>
                    </a>
                    <a href='https://www.linkedin.com/company/saanvinexus/posts/?feedView=all'>
                        <YouTubeIcon/>
                    </a>
                   
                </div>
            </div>
            {/* nav-main ends here */}
            {/* nav-items - 01 */}
            <div className='nav-items'>
                <h6 className='font-bold'>Employers</h6>
                <ul className='px-0'>
                    <li>Overview</li>
                    <li>Recruitment Solutions</li>
                    <li>Executive Search</li>
                    <li>Talent Solutions</li>
                    <li>Get in Touch</li>
                </ul>
            </div>
            {/* nav-items ends here */}
            {/* nav-items - 02 */}
            <div className='nav-items'>
                <h6 className='font-bold'>jobs</h6>
                <ul className='px-0'>
                    <li>Overview</li>
                    <li>Find a job</li>
                    <li>Meet our consultants</li>
                    <li>Send us your cv</li>
                </ul>
            </div>
            {/* nav-items ends here */}
            {/* nav-items - 03 */}
            <div className='nav-items'>
                <h6 className='font-bold'>Resources</h6>
                <ul className='px-0'>
                    <li>Browse all content</li>
                    <li>2024 Salary</li>
                    <li>Job description templates</li>
                </ul>
            </div>
            {/* nav-items ends here */}
            {/* nav-items - 04 */}
            <div className='nav-items'>
                <h6 className='font-bold'>About</h6>
                <ul className='px-0'>
                    <li>Overview</li>
                    <li>Our Work</li>
                    <li>Our Story</li>
                    <li>Our Purpose</li>
                    <li>Our Commitments</li>
                    <li>Careers</li>
                    <li>Media centre</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* nav-items ends here */}
            </div>
            {/* All nav ends here */}
            {/* footer bottom part */}
            <div className='footer-bottom'>
            <div className='footer-bottom-content'>
                <span className='copy-right'>@ Saanvi Nexus 2024</span>
                <div>
                    <ul className='footer-btm-ul'>
                        <li>
                    <h6 className='legal'>Legal</h6>
                            Overview
                            </li>
                        <li>Privacy & Data</li>
                        <li>Manage your cookies</li>
                        <li>Terms of service</li>
                    </ul>
                </div>
                <div className='Org-logo'>Logo here</div>
            </div>
            </div>
            {/* footer bottom part ends here */}
        </div>
        </div> 
    </>
  )
}

export default Footer
