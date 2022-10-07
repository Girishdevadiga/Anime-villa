import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react';
import logo from "../brand-logo.png"
import { Zoom , Slide } from '@mui/material';

export default function Navbar() {

    let location = useLocation().pathname;
    const [path, setPath] = useState(location)

    const PathHandler = ()=>{
       let val = useLocation().pathname;
       setPath(val) ;
    }
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div className="container-fluid">
                <Zoom in={true}>
                    <Link className="navbar-brand" to="/">
                    <img src={logo} width="60" height="48" alt="Brand Logo" />
                        </Link></Zoom>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <Slide in={true}>
                        <div className="navbar-nav">
                            <Link onClick={PathHandler} className={path==="/"?"nav-link active":"nav-link "} aria-current="page" to="/">Home</Link>
                            <Link className={path==="/recent-release"?"nav-link active":"nav-link "} to="/recent-release">Recent Release</Link>
                            <Link className={path==="/movies"?"nav-link active":"nav-link "} to="/movies">Movies</Link>
                        </div>
                        </Slide>
                    </div>
                    
                </div>
            </nav>
          
            
        </div>
    )
}
