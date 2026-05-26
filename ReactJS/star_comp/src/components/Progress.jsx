import React, { useEffect, useState } from 'react'
import './Progres.css'

const ProgressBar = ({progess}) =>{
    const [progres,setprogres]=useState(0);

    
    useEffect(()=>{
       setTimeout((progress)=>{
        setprogres(progess)
    },200)
    },[progess])

   return (
    <div>
        <h3> Loader</h3>
        <div className="container">
            <div className="inner" style={ {
                transform:`translateX(-${100-progres}%)`
                }}>      
                {progres}%
            </div>
        </div>
    </div>
  )

}
const Progress = () => {

  return (<>
  <ProgressBar progess={100}/>
    <ProgressBar progess={32}/></>
  )

}

export default Progress