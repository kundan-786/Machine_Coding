import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/StarRating'
import Progress from './components/Progress'
import Accordian from './components/Accordian'
import ToDoList from './components/ToDoList'
import ChipsInput from './components/ChipsInput'
import { CheckboxTree } from './components/CheckboxTree'

function App() {
  const accordionData = [
    {
      title: 'HTML Section',
      content: 'Content for section 1'
    },
    {
      title: 'CSS Section',
      content: 'Content for section 2'
    },
    {
      title: 'JavaScript Section',
      content: 'Content for section 3'
    }
  ];


  return (
    <>
     {/* <StarRating /> */}
     {/* <Accordian data={accordionData} /> */}
     {/* <Progress/> */}
     {/* <ToDoList/> */}
     {/* <ChipsInput></ChipsInput> */}
     <CheckboxTree/>

    </>
  )
}

export default App
