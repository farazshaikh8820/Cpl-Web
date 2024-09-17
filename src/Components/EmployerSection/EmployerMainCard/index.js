import React from 'react'
import Cards from '../../Mobile-cards'

const EmployersMainCard = () => {
  return (
    <>
      <div className='maincards pt-[90px] pb-[90px]'>
        <div className='container'>
            <div className='maincards-content'>
                <h2 className='h2 leading-[58px] text-[#3E3552] text-center mb-6 '><b>Flexible. Effective.<span className='talent text-[#E37620]'>Beyond compare.</span></b></h2>
                <p className='maincards-p text-[#3E3552] text-center'>Whether you need new people to scale up your teams, or you’re looking for specific skills to help your business<br/> react fast, our full range of talent services will deliver. We Go Beyond to find you the right people.</p>
            </div>
           <Cards/>
        </div>
        </div> 
    </>
  )
}

export default EmployersMainCard
