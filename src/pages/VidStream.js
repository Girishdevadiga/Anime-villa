import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../Styles/vid.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import EpsButon from '../components/EpsButton'
import VidSkeleton from '../components/VidSkeleton'
import BtnSkeleton from '../components/BtnSkeleton'


export default function VidStream() {

    let path = useLocation().pathname;

    let screen = window.innerWidth;
    let anime = path.split("/")[2];
    let epsId = path.split("/")[4];
    // console.log(epsId);
    const [data, setdata] = useState(null)
    const [width, setWidth] = useState(screen)
    const [cdn, setcdn] = useState(null);
    const [eps, setEps] = useState(null)



    useEffect(() => {
        setdata(null);
        setWidth(window.innerWidth)
        axios.get(`https://gogoanime.herokuapp.com/anime-details/${anime}`)
            .then(res => setdata(res.data));
    }, [anime])

    useEffect(() => {
        setTimeout(() => {
            if (data !== null) {
                setEps(data.episodesList.reverse())
            }
        }, 2000);
    })

    useEffect(() => {
        setcdn(null);
        axios.get(`https://gogoanime.herokuapp.com/vidcdn/watch/${epsId}`)
            .then(res => setcdn(res.data.Referer))
    }, [epsId])

    function capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1) + " ";
    }


    return (
        <div className='container'>
            <Navbar/>
            <div className="title rounded">
                <p className='text-warning px-2 py-3'>{
                    capFirstLetter(anime.replace(/-/g, " "))}
                    | EPS {epsId.split("-")[epsId.split("-").length - 1]} </p>
                    <span col></span>
                    
            </div>  
            <div className={width > 600 ? "container rounded stream-container pb-5 pt-1" : "container rounded stream-container  "}
                style={{ "backgroundColor": "#000" }}>
                {
                    cdn === null ?
                        <VidSkeleton />
                        :
                        <div className="wrapper ">
                            <iframe src={cdn}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                             title={"Anime"} allowFullScreen></iframe>
                        </div>
                }

                <div className="container">
                    <h3 className='text-light  bg-dark p-2 rounded'>Episode List</h3>
                    <div className='row d.flex justify-content-start px-1'>
                        {
                            eps !== null ?
                                eps.map((ele) => {
                                    return <EpsButon key={ele.episodeId} id={ele.episodeId} title={anime} epsNum={ele.episodeNum} currentId={epsId} />
                                })
                                :
                                <BtnSkeleton />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
