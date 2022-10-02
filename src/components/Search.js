import React from 'react'
import { useState } from 'react';

export default function Search(props) {
  
   const [disbale, setdisbale] = useState(true)

  const clickHandler = ()=>{
    let val = document.querySelector("#search").value;
    //console.log("clicked");
    props.searchFun(val);
    setTimeout(() => {
      document.querySelector("#search").value="";
    }, 1500);
    
  }

  const changeHandler = (event)=>{
  
 
    if(event.target.value.trim()===""){
      setdisbale(true);
    }
    else{
      setdisbale(false);
    }
  }

    return (
      <div className="input-group">
      
      <input type="search" className="form-control rounded" placeholder="eg. naruto" id='search' aria-label="Search" aria-describedby="search-addon" onChange={changeHandler}/>
      <button type="button" id='btn'  onClick={clickHandler} className="btn btn-outline-primary mx-2" disabled={disbale} >search</button>
    </div>

    )
}
