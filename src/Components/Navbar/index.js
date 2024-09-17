import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
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
      <div className='Navbar bg-[white] h-[auto]'>
        <div className='Navbar pt-4 pb-4'>
          <div className='container flex justify-around'>
            <div className='hamburger ' onClick={handleTogle}>
              <MenuIcon />
            </div>
            <div className='logo w-fit'>Logo here</div>
                  <div className='nav-list flex gap-[100px]'>
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
      {/* <div className={`menu-open ${togle === true ? "show" : ""}`}>
        <Row>
          <Col md={3} className='p-0'>
            <div className='left-side'>
              <div className='hamburger-content'>
                <div className='hamburger-logo '>logo here</div>
                <div className='All-ul'>
                  <ul className='left-hm-ul'>
                    <li>Employers</li>
                    <li>Jobs</li>
                    <li>About</li>
                    <li>Resources</li>
                  </ul>
                </div>
                <div className='hamburger-btns'>
                  <button type='text' className='hamburger-btn mbtn'>Find Talent</button>
                  <button type='text' className='hamburger-btn mbtn'>Find a Job</button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className='p-0'>
            <div className='med-side'>

            </div>
          </Col>
          <Col md={6} className='p-0'>
            <div className='right-side'>

            </div>
          </Col>
        </Row>
      </div> */}
    </>
  )
}

export default Navbar
