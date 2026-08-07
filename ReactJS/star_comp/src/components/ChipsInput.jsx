import React, { useState } from "react"
import '../App.css'
const ChipsInput = ()=>{
    const [inputTxt,setinputText]=useState('');
    const [chips,setChips]=useState(["Chip","chip2"])
    function handleEnter(e){
        if(e.key=='Enter'){
            setChips([...chips,e.target.value])
        }
    }
    function deleteChip(chip){
        setChips(
             chips.filter((txt)=>txt!=chip)
        )
    }

    return <>
    <div className="Chips">
        Chips INput

        <div className="Container">
            <input type="text" className="input" onKeyDown={(e)=>handleEnter(e)} onChange={(e)=>setinputText(e.target.value)} />

        </div>
        {inputTxt}
        <div className="chipslst" style={{display:"flex"}}>
            {chips&&chips.map((chip,index)=>{
                return <div className="chip" >
                    
                    <span  className="chips"> {chip}</span>
                   
                    <span className="cros" onClick={()=>deleteChip(chip)}>
                        ❌
                    </span>
                </div>
            })}
        </div>
    </div>
    </>

}
export default ChipsInput