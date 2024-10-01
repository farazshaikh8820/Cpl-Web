import React from 'react'
import './style.css'
const HeroResource = () => {
  return (
    <>
      <div className='innerHero'>
        <div className='container'>
            <h1>Resources Hub</h1>
            <p>Whether you’re thinking about hiring new employees or you’re looking for expert career guidance, you’ll find the resources, advice and insights you need right here.</p>
        </div>
      </div>
      <div className='articale-wrapper'>
        <div className='container'>
          <div className='hero-all-input'>
          <input type='text' placeholder='Topic' id='topic'></input>
          <input type='text' placeholder='Content Type' id='Content-Type'></input>
          <button type='text' className='mbtn'>Filter</button>
          <button type='text' className='template-btn'>Templates</button>
          <input type='text' placeholder='Search' id='Content-Type' className='ml-6'></input>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroResource
