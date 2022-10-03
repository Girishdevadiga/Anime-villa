import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search';
import axios from 'axios';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import CardSkeleton from '../components/CardSkeleton'



export default function Movies() {

 let num=[1,2,3,4,5,6,7,8,9,10];
  const [data, setData] = useState([]);
  const [load, setload] = useState(false);

  useEffect(() => {
    setload(true);
    axios.get(process.env.REACT_APP_MOVIES_API)
      .then(res => setData(res.data))
       .then(()=>setload(false));
  }, [])

  const searchHandler = (val)=>{
    setload(true)
    axios.get(process.env.REACT_APP_SEARCH_API+`keyw=${val}`)
        .then(res =>setData(res.data));
        setTimeout(() => {
          setload(false);
        }, 1500); 
  }


  return (

    <div className='container'>
    
    <div className='row d-flex justify-content-between '>
        <div className="col-lg-6"> <Navbar /></div>
        <div className="col-lg-6 my-2"> <Search searchFun={searchHandler} /></div>
      </div>
      <div className="card-container rounded ">
        <div className='row'>
        {load ? 
          num.map((ele)=>{
            return <CardSkeleton key={ele}/>
          })
        :

data.map((ele) => {
              return (<Card 
              key={ele.animeId} 
              id={ele.animeId}
              title={ele.animeTitle} 
              url={ele.animeImg} 
              status={"status" in ele? ele.status.split(" ")[1]:null}
              date={"releasedDate" in ele ? ele.releasedDate : null}
              epsId={"episodeId" in ele ? ele.episodeId:null}
              info = {"episodeNum" in ele?ele.episodeNum+" | "+ele.subOrDub:null}
              
              />)
            })
        }
          
            
          
        </div>
      </div>
    </div>

  )
}
