import React from 'react'
import { Link } from 'react-router-dom';

export default function EpsButon(props) {


  const epsHandler = (event) => {
        <Link to={"/anime/"+props.title+"/watch/"+props.id} />
    }
    return (
        
        <div className="col-lg-1 col-md-2 col-sm-3 col-4  my-1 ">
        <Link to={"/anime/"+props.title+"/watch/"+props.id}>
            <button style={{ "width": "6rem", "height": "3rem" }} type="button" 
            className={props.id===props.currentId ? "btn btn-outline-light active":"btn btn-outline-light" } value={props.id} onClick={epsHandler}>EP |{props.epsNum} 
            
            </button>
        </Link>
        </div>
        

    )
}
