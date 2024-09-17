import React from 'react'
import './style.css'
import BottomImg from '../../Assets/Images/color-line.png'
import { Link } from 'react-router-dom'
const InvestingTime = () => {
    const InvestingData = [
        {
            id: 1,
            Tittle:"5000+",
            Description:"happy clients"
        },
        {
            id: 2,
            Tittle:"1.5M+",
            Description:"qualified candidates"
        },
        {
            id: 3,
            Tittle:"6000",
            Description:"employees & associates"
        },
        {
            id: 4,
            Tittle:"30+",
            Description:"years of experience"
        },
    ]
  return (
    <>
      <div className='InvestingTime'>
        <div className='container'>
            <div className='Investing-content '>
                <h2 className='h2'>Investing time in people;<br/><span>it's in our DNA.</span></h2>
            </div>
            {/* All-cards here */}
            <div className='Investing-all-cards'>
            {InvestingData.map((item, Index)=>{
                return(
                    <div className='Investing-cards'>
                        <div className='dna-count'>{item.Tittle}</div>
                    <p>{item.Description}</p>
                    <div className='Investing-bottom-Img absolute bottom-0 left-0 '>
                <img src={BottomImg}/>
                </div>
                    </div>
                )
            })}
            
            </div>
            {/* bottom btn*/}
            <div className='Investing-button-btn'>
            <Link to='/About' className='mainNavbar-button mbtn'>Learn more about us</Link>
            </div>
            </div>
            {/* 02 */}
        
        </div>
      {/* </div> */}
    </>
  )
}

export default InvestingTime
