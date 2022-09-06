import React, { useState } from "react";
import './FeedBack.css';
const FeedBack = () => {
  const [input, setData] = useState({})
  const[obj,setObj] =useState([])
  const[hidden,setHidden] =useState()

  const [counter,setCounter] = useState();
  const inputChange = (e) => {
        setData({...input,[e.target.name]:e.target.value});
  }

  const onsubmits = (e) =>{
    e.preventDefault();
    setCounter(counter)
    const arr={...input,id:counter}
    setObj([...obj,arr])
    setData({name:"",department:"",rating:"",})
    setHidden(!hidden)
  }

  const goBack =()=>{
    setHidden(!hidden)
  }
  

  return (
    <>
      <div style={{'display':hidden===true ? 'none':'unset'}} >
          <h2>employee feedback form</h2>
          <form onSubmit={onsubmits}>
            <label >Name :
            <input type="text" name="name" id="name" value={input.name}  onChange={inputChange} />
            </label><br/>
            <label >Department :
            <input type="text" name="department" id="department" value={input.department} onChange={inputChange} />
            </label><br/>
            <label >Rating :
            <input type="number" name="rating" id="rating" value={input.rating} onChange={inputChange} />
            </label><br/><br/>
            <input type="submit"/>
          </form>
          
      </div>
      <div style={{'display':hidden===true ? 'unset':'none'}} >
        <h2>employee feedback data</h2>
          <div className='outerbox'>
            {obj.map((item)=>{
                return <div className='databox'>Name : {item.name } || Department : {item.department} || Rating : {item.rating}</div>
            })}
          </div>
          <button onClick={goBack}>Go Back</button>
      </div>
     
    </>
  );
}
export default FeedBack;