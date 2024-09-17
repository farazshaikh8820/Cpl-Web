import React from 'react'
import "./style.css"
const Cards = () => {
  const CardData = [
    {
      id: 1,
      Title:"Contract Recruitment",
      description:"Hire contractors or temps to strengthen your workforce. When it matters most, seize every opportunity.",
    },
    {
      id: 2,
      Title:"Permanent Recruitment",
      description:"Hire contractors or temps to strengthen your workforce. When it matters most, seize every opportunity.",
    },
    {
      id: 3,
      Title:"Executive Search",
      description:"Hire contractors or temps to strengthen your workforce. When it matters most, seize every opportunity.",
    },
    {
      id: 4,
      Title:"Talent Solutions",
      description:"Hire contractors or temps to strengthen your workforce. When it matters most, seize every opportunity.",
    },
  ]
  return (
    <>
   
      <div className='all-cards'>
        <div className='container'>

        
        <div className='cards flex gap-5 '>
          
          {CardData.map((item, index)=>{
            return(
              <>
              <div className="card-content w-[315px] bg-[#3E3552] text-white flex-col grid"key={index}>
              <h3>{item.Title}</h3>
              <p>{item.description}</p>
              <button type='text' className='cards-btn'>learn More</button>
              </div>
              </>
            )
          })}
          
      
        </div>
        </div>
         </div>
    </>
  )
}

export default Cards
