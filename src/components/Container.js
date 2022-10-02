import React from 'react'
import { useState } from 'react';
import '../Styles/container.css'



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
                <button onClick={clickHandler} value="recent-release" className="btn btn-sm btn-outline-light mx-2 my-1">Recent Release</button> <span>|</span>
                <button onClick={clickHandler} value="action" className="btn btn-sm btn-outline-light mx-2 my-1">Action</button> <span>|</span>
                <button onClick={clickHandler} value="shounen" className="btn btn-sm btn-outline-light mx-2 my-1">Shounen</button> <span>|</span>
                <button onClick={clickHandler} value="sports" className="btn btn-sm btn-outline-light mx-2 my-1">Sports</button> <span>|</span>
                <button onClick={clickHandler} value="horror" className="btn btn-sm btn-outline-light mx-2 my-1">Horror</button> <span>|</span>
                <button onClick={clickHandler} value="school" className="btn btn-sm btn-outline-light mx-2 my-1">School</button> <span>|</span>
            </div>



            {!props.disbaleHandler && <div className="container  page flex-row navbar-nav my-auto justify-content-end"> <button
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
