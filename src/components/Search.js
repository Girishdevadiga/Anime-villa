import React from 'react'
import { useState} from 'react';
import { Slide } from '@mui/material';
import data from '../data.js'
import '../Styles/search.css'

export default function Search(props) {
  

   const [disbale, setdisbale] = useState(true)
   const [anime, setanime] = useState([]);
   //console.log(anime.length);

  const clickHandler = ()=>{
    let val = document.querySelector("#search").value;
    //console.log("clicked");
    props.searchFun(val);
    setTimeout(() => {
      document.querySelector("#search").value="";
    }, 1500);
    
  }
  const changeHandler = (event)=>{
    setanime([]);
    let str =event.target.value;
    if(str.trim()===""){
      setdisbale(true);
    }
    else{
      setdisbale(false);
    }

  data.titleList.map((val)=>{
      if(val.toLowerCase().includes(str.toLowerCase())){
        setanime((arr)=>[...arr,val])
      }
    })
  //  console.log(anime);
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
  const suggestionHandler = (event)=>{
    setdisbale(false);
    let val = event.target.innerText;
    document.querySelector("#search").value=val;
    setanime([]);
    props.searchFun(val);
  }

    return (
      <div className='d-flex flex-column'>
      <div className="input-group" >
      <Slide  in={true} direction="right">
      <input type="search" spellCheck={false} className="form-control rounded" placeholder="eg. naruto"  id='search' aria-label="Search" aria-describedby="search-addon" autoComplete='off' onChange={changeHandler } onKeyDown={keyHandler}/></Slide>
      <Slide in={true} direcion="up">
      <button type="button" id='btn'  onClick={clickHandler} className="btn btn-outline-primary mx-2" disabled={disbale} >search</button>
      </Slide>
      
    </div>
    <div className='suggestion rounded'>
    {anime.length!==0 &&
      anime.slice(0,6).map((val)=>{
        return <div className='list p-1'  onClick={suggestionHandler}>
          <li value={val}>{val}</li>
        </div>
      })
      }
      </div>
    </div>
    )
}
