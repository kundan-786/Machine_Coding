import { useState,useEffect } from 'react'
import './App.css'

const url="https://dummyjson.com/recipes/search?q=";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTxt, setSearchTxt]=useState("");
  const [showRes,setShowRes]=useState(false);
  
  const fetchRecipes=async (searchTxt)=>{
    if(searchTxt.length==0) {
      setRecipes([]);
      setShowRes(false)
      return;
    }
     const res= await fetch(url+searchTxt)
    const data=await res.json();
    setRecipes(data.recipes);
    setShowRes(true);
  }

  useEffect(()=>{
  let timer=setTimeout(()=>{
   fetchRecipes(searchTxt)
  },300) 
 
  return function (){
    clearTimeout(timer);
}
  },[searchTxt]);

  return (
    <>
      <div className="App">
        <div className="container">
            <h3 className="title">Debounced Search</h3>
            <input type="text" className="input" placeholder="Search..."
            onChange={(e)=>setSearchTxt(e.target.value)}
             />
          </div>
         { recipes.length>0&&<div className="dropdown">
           { recipes.map((recipe)=>{
              return <div className="recipe" key={recipe.id}>
                {recipe.name}
              </div>
            })
            }
          </div>}
      </div>
        
   </>
  )
}

export default App
