import React from 'react'
import { useState } from 'react';
import '../Styles/container.css'
import { Slide } from '@mui/material';


export default function Container(props) {


    const [page, setpage] = useState(1)
    const [genre, setgenre] = useState("popular")

    //console.log(props.disbaleHandler);
    const clickHandler = (event) => {
        // console.log(event.target.value);
        let val = event.target.value;
        setgenre(val);
        setpage(1)
        props.genreClick(val, page);
    }

    const prevClick = () => {
        setpage(page - 1);
        if (genre === "popular") {
            props.genreClick(genre, page + 1);
        }
        else {
            props.genreClick(genre, page - 1);
        }

    }
    const nextClick = () => {
        // console.log(page);
        setpage(page + 1);

        if (genre === "popular") {
            props.genreClick(genre, page + 1);
        }
        else {
            props.genreClick(genre, page + 1);
        }

    }

    return (


        <div className='container my-3 tag-container d-flex justify-content-between  rounded' >
            <div className='flex-row my-2 '>
                <Slide in={true} timeout={400} direction="right">
                    <button onClick={clickHandler} value="action" className={genre === "action" ? "btn btn-sm btn-outline-light mx-2 my-1 active" : "btn btn-sm btn-outline-light mx-2 my-1 "}>Action</button>
                </Slide><span>|</span>
                <Slide in={true} timeout={400} direction="right">
                    <button onClick={clickHandler} value="shounen" className={genre === "shounen" ? "btn btn-sm btn-outline-light mx-2 my-1 active" : "btn btn-sm btn-outline-light mx-2 my-1 "}>Shounen</button>
                </Slide><span>|</span>
                <Slide in={true} timeout={400} direction="right">
                    <button onClick={clickHandler} value="sports" className={genre === "sports" ? "btn btn-sm btn-outline-light mx-2 my-1 active" : "btn btn-sm btn-outline-light mx-2 my-1 "}>Sports</button>
                </Slide> <span>|</span>
                <Slide in={true} timeout={400} direction="right">
                    <button onClick={clickHandler} value="horror" className={genre === "horror" ? "btn btn-sm btn-outline-light mx-2 my-1 active" : "btn btn-sm btn-outline-light mx-2 my-1 "}>Horror</button>
                </Slide> <span>|</span>
                <Slide in={true} timeout={400} direction="right">
                    <button onClick={clickHandler} value="school" className={genre === "school" ? "btn btn-sm btn-outline-light mx-2 my-1 active" : "btn btn-sm btn-outline-light mx-2 my-1 "}>School</button>
                </Slide> <span>|</span>
                <Slide in={true} timeout={400} direction="right">
                    <button onClick={clickHandler} value="super-power" className={genre === "super-power" ? "btn btn-sm btn-outline-light mx-2 my-1 active" : "btn btn-sm btn-outline-light mx-2 my-1 "}>Super Power</button>
                </Slide> <span>|</span>
            </div>


            {!props.disbaleHandler && <div className="container page flex-row navbar-nav my-auto justify-content-end">
                <button
                    className={page > 1 ? "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark" : "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark disabled"}
                    onClick={prevClick}>&larr;
                </button>
                <button
                    className={props.len === 20 ? "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark " : "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark disabled"}
                    onClick={nextClick}>&rarr;
                </button> </div>}



        </div>

    )
}
