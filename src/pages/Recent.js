import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import CardSkeleton from '../components/CardSkeleton';
import '../Styles/container.css'
import {Slide,Zoom} from '@mui/material';



export default function Manga() {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [data, setData] = useState([])
  const [load, setload] = useState(false);
  const [type, settype] = useState("1")
  const [page, setpage] = useState(1)

  useEffect(() => {
    setload(true)
    axios.get(process.env.REACT_APP_ROOT_API + `recent-release?type=${type}&page=${page}`)
      .then(res => setData(res.data))
      .then(() => setload(false));
    console.log(page);
  }, [type, page])

  const changeHandler = (event) => {
    const val = event.target.value;
    settype(val)
    setpage(1)
  }
  const prevClick = () => {
    setpage(page - 1)
  }
  const nextClick = () => {
    setpage(page + 1)
  }



  return (
    <div className='container'>
      <Navbar  />
      <div className='card-container'>
        <div className='container my-3 tag-container rounded d-flex justify-content-between' >
          <Slide in={true} direction="up">
            <div className=' d-flex justify-content-start flex-row my-2 p-2 text-light'>
              <button className={type === "2" ? 'btn-outline-light btn mx-2 active' : 'btn-outline-light btn mx-2'} value={2} onClick={changeHandler}>DUB</button>
              <button className={type === "1" ? 'btn-outline-light btn mx-2 active' : 'btn-outline-light btn mx-2'} value={1} onClick={changeHandler}>SUB</button>
              <button className={type === "3" ? 'btn-outline-light btn mx-2 active' : 'btn-outline-light btn mx-2'} value={3} onClick={changeHandler}>Chinese</button>
            </div>
          </Slide>
          <Zoom in={true}>
          <div className="container page flex-row navbar-nav my-auto justify-content-end">
         
            <button
              className={page > 1 ? "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark" : "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark disabled"}
              onClick={prevClick}>&larr;
            </button> 
            <button
              className={data.length === 20 ? "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark " : "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark disabled"}
              onClick={nextClick}>&rarr;
            </button> 
            </div>
            </Zoom>
          <div>

          </div>
        </div>
        <div className='row '>
          {load ?
            num.map((ele) => {
              return <CardSkeleton key={ele} />
            })
            :

            data.map((ele) => {
              return (
                
                <Card
                key={ele.animeId}
                id={ele.animeId}
                title={ele.animeTitle}
                url={ele.animeImg}
                status={"status" in ele ? ele.status.split(" ")[1] : null}
                date={"releasedDate" in ele ? ele.releasedDate : null}
                epsId={"episodeId" in ele ? ele.episodeId : null}
                info={"episodeNum" in ele ? ele.episodeNum + " | " + ele.subOrDub : null}

              />)
            })
          }



        </div>
        <div className='d-flex justify-content-center'>
          <p>&copy; Anime Villa 2022</p>
        </div>
      </div>
    </div>

  )
}
