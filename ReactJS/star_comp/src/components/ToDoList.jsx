import React, { useRef, useState } from 'react'

const ToDoList=()=>{
    const [tasks,setTask]=useState([]);
    const [inputText,setinputText]=useState('');
    // const inputref=useRef()

    function createTask(){
        // if(!inputref.current.value) return;
        if(inputText.length==0) return;
        let item={
            id:Date.now(),
            text:inputText,
            // inputref.current.value,
            completed:false
        }
        setTask([...tasks,item]);
        setinputText("")
    }

    function toggleComplet(id){
        setTask(
            tasks.map((task,index)=>{
            if(task.id==id){
                return {
                    ...task,completed:!task.completed
                }
            }else return task;
        }))
        
    
    }
    function deleteTask(id){
        setTask(
            tasks.filter((task) =>task.id!=id)
        )
    }

    return <>
    <div className="Container">
      
        <h3 className="heading">  ToDoList</h3>
        <input type="text" 
        value={inputText} onChange={(e)=>setinputText(e.target.value)}
        // ref={inputref} 
         className="createTask" style={{height:'30px', padding:'15px',margin:'3px', fontSize:'18px'
        }} />
        <button onClick={()=>createTask()}>Submit</button>

        <div className="task">
            {tasks&&tasks.map((task,index)=>{
                return (
                    <div key={task.id} className="tasklist">
                    <input type="checkbox" className="task" checked={task.completed} onChange={()=>toggleComplet(task.id)} />
                    <span style={{
                        // textDecoration:`${task.completed}? "line-through":"none"`
                          textDecoration: `${task.completed ? "line-through" : "none"}`
                        }} >{task.text}</span>
                    <button onClick={()=>{deleteTask(task.id)}}>Delete</button>
                    </div>
                   
                )
            })}
        </div>
    </div>
    </>
}
export default ToDoList;