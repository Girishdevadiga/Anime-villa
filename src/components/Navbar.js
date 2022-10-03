import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react';
import logo from "../brand-logo.png"

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
                    <Link className="navbar-brand" to="/">
                    <img src={logo} width="60" height="48" alt="Brand Logo" />
    
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link onClick={PathHandler} className={path==="/"?"nav-link active":"nav-link "} aria-current="page" to="/">Home</Link>
                            <Link className={path==="/dub"?"nav-link active":"nav-link "} to="/dub">Dub</Link>
                            <Link className={path==="/movies"?"nav-link active":"nav-link "} to="/movies">Movies</Link>
                        </div>
                    </div>
                    
                </div>
            </nav>
          
            
        </div>
    )
}
