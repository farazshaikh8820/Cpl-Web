import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Nav, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './style.css'





const Navbar = () => {
  const [togle, setTogle] = useState(false)
  const handleTogle = () => {
    setTogle(!togle)
  }
  return (
    <>
      <div className='Navbar-wrapper'>
        <div className='Navbar-content '>
          <div className='container flex justify-around absolute z-50'>
            <div className='hamburger ' onClick={handleTogle}>
              {togle ?   <CloseIcon/> :<MenuIcon /> }
            </div>
            <div className='logo w-fit'>Logo here</div>
                  <div className='nav-list'>
                    <Nav.Link as={Link} to='/'></Nav.Link>
                    <Nav.Link as={Link} to='/Employers'><b>Employers</b></Nav.Link>
                    <Nav.Link as={Link} to='/Jobs'><b>Jobs</b></Nav.Link>
                    <Nav.Link as={Link} to='/About'><b>About</b></Nav.Link>
                    <Nav.Link as={Link} to='/Resources'><b>Resources</b></Nav.Link>
                  </div>
            <span className='search-icon'>
              <SearchIcon />
            </span>
            </div>
        </div>
      </div>
      
      <div className={`menu-open ${togle === true ? "show" : ""}`}>
            <div className='left-side'>
              <div className='hamburger-content'>
                {/* <div className='CloseIcon' onClick={handleTogle}>
                  {togle ? <MenuIcon /> : <CloseIcon />}
                </div> */}
                <div className='hamburger-logo '>logo here</div>
                <div className='All-ul'>
                  <ul className='left-hm-ul'>
                    <li><Nav.Link as={Link} to='/Employers'><b>Employers</b></Nav.Link></li>
                    <li><Nav.Link as={Link} to='/Jobs'><b>Jobs</b></Nav.Link></li>
                    <li><Nav.Link as={Link} to='/About'><b>About</b></Nav.Link></li>
                    <li><Nav.Link as={Link} to='/Resources'><b>Resources</b></Nav.Link></li>
                  </ul>
                </div>
                <div className='hamburger-btns'>
                  {/* <button type='text' className='hamburger-btn mbtn'>Find Talent</button> */}
                  <Link to='/jobs' className='mainNavbar-button mbtn'>Find a Job</Link>
                  <Link to='/HireTalent' className='mainNavbar-button mbtn'>Find a Talent</Link>
                  {/* <button type='text' className='hamburger-btn mbtn'>Find a Job</button> */}
                </div>
              </div>
            </div>

      </div>
      
    </>
  )
}

export default Navbar
