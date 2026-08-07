import React, { useState } from 'react'
import './Progres.css'


const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Checkbox=({data,checked,setChecked})=>{

    const handleChange=(isChecked,node)=>{
      // console.log(setChecked)
     
      setChecked((prev)=>{
       const newState={...prev,[node.id]:isChecked};

 // if any node is checked then check it all child nodes

      const CheckChildNodes=(node)=>{
       if(node.children){
        node.children.map((child)=>{
          newState[child.id]=isChecked;
          if(child.children) CheckChildNodes(child);        
        })
       }
      }
        CheckChildNodes(node);


      const CheckParent=(node)=>{
       if(!node.children) return !!newState[node.id];

       newState[node.id]= node.children.every((child)=> CheckParent(child));

       return newState[node.id];

      //  data.children.length&&data.children.forEach((ele)=>{  
      //   // if(ele.children.length){
      //   //   ele.chidren.forEach((child)=>{
      //   //     if(!newState[child]) return allchildcheck=false;
      //   //     if(child.children) CheckParent(child);
      //   //   })
      //   //    return allchildcheck;
      //   // }
      //  })
      //  if(allchildcheck)
      //  newState[data.id]=allchildcheck;

      }
        CheckboxesData.forEach((item)=>CheckParent(item))
        return newState;
      })

      // Now reverse iterate all the data nodes if all childs are checked then make the parent checked also

      
      
     
  // console.log(checked)
    }
    
    return <div className="checkcontainer" style={{marginLeft:'25px'}}>
        {/* <input type='checkbox'></input>
        <label htmlFor="">Fruits</label> */}
        <input type='checkbox' checked={!!checked[data.id]} onChange={(e)=>handleChange(!!e.target.checked,data)}></input>
        <label htmlFor="">{data.label}</label>
        {data.children&& data.children.map((item,index)=><Checkbox checked={checked} setChecked={setChecked} className="ml-3" key={item.id} data={item}/>)
        }
    </div>
}

export const CheckboxTree = () => {
    const data =CheckboxesData;
      const [checked,setChecked]=useState({});
      console.log(checked)
  return (
    <div>
        <h3>Checkbox input tree</h3>
        {/* <Checkbox data={data}></Checkbox> */}
        {data.map((item,index)=><Checkbox  checked={checked} setChecked={setChecked} className="ml-3" key={item.id} data={item}/>)
        }
    </div>
  )
}
