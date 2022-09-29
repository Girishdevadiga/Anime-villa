import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Search from '../components/Search';
import Container from '../components/Container';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import CardSkeleton from '../components/CardSkeleton'


export default function Home() {

 let num=[1,2,3,4,5,6,7,8,9,10];
  const [data, setData] = useState([]);
  const [searchBool, setsearch] = useState(false);
  const [load, setload] = useState(false);
 

  useEffect(() => {
    setload(true);
    setsearch(true);
    axios.get("https://gogoanime.herokuapp.com/popular")
      .then(res => setData(res.data));
      setsearch(false);
      setTimeout(() => {
        setload(false);
      }, 1500);
      

  }, [])


  const genreHandler = (val,page) => {
    setsearch(false);
    setload(true);
 
    if (val === "recent-release") {
      axios.get(`https://gogoanime.herokuapp.com/${val}?page=${page}`)
        .then(res => setData(res.data));
    }
    else if(val==="popular"){
     
      axios.get(`https://gogoanime.herokuapp.com/${val}?page=${page+1}`)
        .then(res => setData(res.data));
    }
    else {
      console.log(page);
      axios.get(`https://gogoanime.herokuapp.com/genre/${val}?page=${page}`)
        .then(res => setData(res.data));
    }
    setsearch(false);
    setTimeout(() => {
      setload(false);
    }, 2000);

  }

  const searchHandler = (val)=>{
    setsearch(true);
    setload(true)
    axios.get(`https://gogoanime.herokuapp.com/search?keyw=${val}`)
        .then(res => setData(res.data));

        setTimeout(() => {
          setload(false);
        }, 1500);
  }


  console.log(data);
  return (

    <div>
    
      <div className='row d-flex justify-content-between '>
        <div className="col-lg-6"> <Navbar /></div>
        <div className="col-lg-6 my-auto"> <Search searchFun={searchHandler} /></div>
      </div>
      <Container genreClick={genreHandler} len={data.length} disbaleHandler={searchBool} />
      <div className="card-container rounded ">
        <div className='row'>
        {load ? 
          num.map(()=>{
            return <CardSkeleton/>
          })
        :

data.map((ele) => {
              return (<Card 
              key={ele.animeId} 
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
