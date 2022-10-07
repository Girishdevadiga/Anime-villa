import React from 'react'
import { useState } from 'react';
import {  Slide } from '@mui/material';

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

  const keyHandler = (event)=>{
    if(event.key==="Enter"){
      let val = document.querySelector("#search").value;
      //console.log("clicked");
      if(val.trim()!==""){
        props.searchFun(val);
        setTimeout(() => {
          document.querySelector("#search").value="";
        }, 1500);
      }

    }
  }

    return (
      <div className="input-group" >
      <Slide  in={true} direction="right">
      <input type="search" spellCheck={false} className="form-control rounded" placeholder="eg. naruto" id='search' aria-label="Search" aria-describedby="search-addon" onChange={changeHandler } onKeyDown={keyHandler}/></Slide>
      <Slide in={true} direcion="up">
      <button type="button" id='btn'  onClick={clickHandler} className="btn btn-outline-primary mx-2" disabled={disbale} >search</button>
      </Slide>
    </div>

    )
}
