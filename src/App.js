import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// Navbar Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About'
import Employers from '../src/Pages/Employers'
import Jobs from './Pages/Jobs';
import Resources from './Pages/Resources';
import CompareSalary from './Pages/CompareSalary';
import HireTalent from './Pages/Hire-Talent';
import OurWork from './Pages/OurWork/';
import ViewJobButton from './Pages/View-Jobs-Button';

// Navbar Routing ens

const App = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/Resources" element={<Resources/>} />
        <Route path="/CompareSalary" element={<CompareSalary/>} />
        <Route path='/HireTalent' element={<HireTalent/>}/>
        <Route path='/OurWork' element={<OurWork/>}/>
        <Route path='/ViewJobButton' element={<ViewJobButton/>}/>
      </Routes>
    </Router>
      
       {/* <MainNavbar />
      <MainCards />
      <InvestingTime />
      <CeoSpeach/>
      <Trending/>
      <Carousel/>
      <Footer/> */}
    </>
  )
}

export default App
