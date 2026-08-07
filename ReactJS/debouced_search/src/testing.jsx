// const Parent = () => {
// const [msg, setMsg] = useState("Hi")
// const B=React.memo(function B(){
//     return <div className="B">B Component</div>
// })

// const C=React.memo(function C(){
//     return <div className="C">C Component</div>
// },(prevStae,nextState)=>{
//     if(prevStae==nextState) return ;
// })
 
// return (
// <A msg={msg} setMsg={setMsg}/>
// <B />
// <C/> 
// )
// }
 
// const A = ({msg, setMsg}) => {
//   return (
// <>
//    <div>{msg}</div>
//    <button onClick= {() => setMsg("Bye")}> </button>
// </>
// )
// } 