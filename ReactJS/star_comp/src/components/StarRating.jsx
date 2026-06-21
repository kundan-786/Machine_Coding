import React from 'react'
import { useState } from 'react'
import './starRating.css'
const StarRating = () => {
  const [rating, setRating]=useState(0);
  const arr=[1,2,3,4,5];
  function handleHover(e,ele){
    setRating((pre)=>ele);
  }
   console.log(rating);
  return (
    
    <div className='container2'>
      <div className="starts">
        {  arr.map((ele)=>{
          return <span key={ele} className={`star ${rating>=ele? 'bg-brwn':''}`} onMouseOver={(e)=>handleHover(e,ele)} onClick={(e)=>handleHover(e,ele)}>
           {ele}
          </span>
        })
         
        }
      </div>

    </div>
  )
}

export default StarRating