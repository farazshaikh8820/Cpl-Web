import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom'; // Correct import for Link
import VideoBg from '../../Assets/Video/mmk-global-banner.mp4';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

const MaiNavbar = () => {
  const [togle, setTogle] = useState(false);
  const handleTogle = () => {
    setTogle(!togle);
  };

  return (
    <>
      <div className='Navbar-wrapper'>
      <video src={VideoBg} id='bg-video' preload='none' autoPlay loop muted />
          <div className='container'>
        <div className='Navbar-content'>
            {/* Hamburger Menu Toggle */}
            <div className='hamburger' onClick={handleTogle}>
              {togle ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className='logo w-fit'>Logo here</div>

            {/* Navigation Links */}
            <div className='nav-list'>
              <Nav.Link as={Link} to='/Employers'><b>Employers</b></Nav.Link>
              <Nav.Link as={Link} to='/Jobs'><b>Jobs</b></Nav.Link>
              <Nav.Link as={Link} to='/About'><b>About</b></Nav.Link>
              <Nav.Link as={Link} to='/Resources'><b>Resources</b></Nav.Link>
            </div>

            {/* Search Icon */}
            <span className='search-icon'>
              <SearchIcon />
            </span>
          </div>
         
     

      {/* Menu when toggled */}
      <div className={`menu-open ${togle === true ? 'show' : ''}`}>
        <div className='left-side'>
          <div className='hamburger-content'>
            <div className='hamburger-logo'>Logo here</div>
            <div className='All-ul'>
              <ul className='left-hm-ul'>
                <li><Nav.Link as={Link} to='/Employers'><b>Employers</b></Nav.Link></li>
                <li><Nav.Link as={Link} to='/Jobs'><b>Jobs</b></Nav.Link></li>
                <li><Nav.Link as={Link} to='/About'><b>About</b></Nav.Link></li>
                <li><Nav.Link as={Link} to='/Resources'><b>Resources</b></Nav.Link></li>
              </ul>
            </div>
            <div className='hamburger-btns'>
              <Link to='/jobs' className='mainNavbar-button mbtn'>Find a Job</Link>
              <Link to='/HireTalent' className='mainNavbar-button mbtn'>Find a Talent</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar with Video */}
      <div className='mainNavbar'>
        {/* <video src={VideoBg} id='bg-video' preload='none' autoPlay loop muted /> */}
        <div className='mainNavbar-content'>
          <h2 className='h text-[68px] leading-[115%] mb-[50px] flex justify-center text-center'>
            <b>Talent Services Beyond Expectations.</b>
          </h2>
          <div className='mainNavbar-buttons flex justify-center font-bold gap-6'>
            <Link to="/Jobs" className="mainNavbar-button mbtn">
              I am a Job seeker
            </Link>

            <Link to="/Employers" className='mainNavbar-button mbtn'>
              I am an Employer
            </Link>
          </div>
        </div>
      </div>
      </div>
      {/* </div> */}
      </div>
    </>
  );
};

export default MaiNavbar;
