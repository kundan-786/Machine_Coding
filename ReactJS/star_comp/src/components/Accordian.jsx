import React, { useState } from 'react'

const Accordian = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>Accordian

        {data.map((item,index)=>{
            return <div className="item" style={{border:'1px solid black', padding:'5px', magin:'5px'}}>
                <div onClick={()=>{index!==activeIndex ? setActiveIndex(index) : setActiveIndex(null)}}>
                    {item.title}
                    <span style={{float:'right',backgroundColor:'grey', color:'white', padding:'0px 5px'}}>
                        {index===activeIndex ? '-' : '+'}
                   </span>
                </div>
              {  index===activeIndex && (
                <div className="content" style={{border:'1px grey solid', padding:'2px', margin:'2px'}}>
                    {item.content}
                </div>
              )}
            </div>
        })}
    </div>
    
  )
}

export default Accordian