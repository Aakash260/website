import React from 'react'
import {FaStar,FaStarHalfAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
const Starsreview = ({stars}) => {
   
  const rating=Array.from({length:5},(ele,indx)=>{
    let number=indx+0.5
 
    return (
      <div key={indx} class="bg-gray-300 ">
     
      {stars>=indx+1?<FaStar/>:stars>=number?<FaStarHalfAlt/>:<AiOutlineStar/>}
      </div>
    )
  })
return  <>
 <span className='font-bold bg-gray-300'>Rating:</span>

<div className='flex bg-gray-300'>{rating}</div>
</>
}

export default Starsreview