import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfoCard from '../components/InfoCard';
import '../Styles/info.css'
import EpsButon from '../components/EpsButton';
import InfoSkeleton from '../components/InfoSkeleton';
import BtnSkeleton from '../components/BtnSkeleton';
export default function AnimeInfo() {

  let anime = useLocation().pathname.split("/")[2];
  console.log(anime);
  const [info, setInfo] = useState(null);
  const [eps,setEps] = useState(null);
  const [load,setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    axios.get(`https://gogoanime.herokuapp.com/anime-details/${anime}`)
      .then(res => setInfo(res.data))
      .then(()=>{
        setLoad(false)
      })
      
  },[anime])

  useEffect(()=>{
    setTimeout(() => {
      if (info!==null) {
        setEps(info.episodesList.reverse())
      }
    }, 2000);
    
  })

 
  return (
    <div className='container ' >
      <Navbar />
      <div className=' info '>
        <div className="flex heading p-1 pt-3">
          <h3 className='mx-2'>Anime Info</h3>
        </div>

        { load ? <InfoSkeleton/> :
          <InfoCard key={info.animeTitle} title={info.animeTitle} type={info.type }  date={info.releasedDate} genre={info.genres} otherNames={info.otherNames} summary={info.synopsis} url={info.animeImg} totalEps={info.totalEpisodes} status={info.status} />
        }

        <h3 className='text-light m-3 bg-dark p-2 rounded'>Episode List</h3>

        <div className="container">
          <div className='row d.flex justify-content-start px-1'>
          {eps!==null?
          eps.map((ele)=>{
            return (
              <EpsButon  key={ele.episodeId} id={ele.episodeId} title={anime} epsNum={ele.episodeNum} />
            ) 
          }):
          <BtnSkeleton/>
          }
            
          </div>
        </div>

      </div>
    </div>
  )
}
