import React from 'react'
import '../Styles/card.css'
import { Link } from 'react-router-dom'


export default function Card(props) {
  
  return (

      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center my-2 ">
        <Link to={"/anime/"+props.id} >
        <div className="card anime-card text-center " style={{ "width": "16rem" }}>
          <img className="card-img-top card-img " src={props.url} alt="anime poster" />
          <div className="card-body">
            <h5>{props.title} </h5>
            {
              props.date !== null && <p className="card-text" style={{ "color": "#c694f7" }}>Released Date <b>{props.date}</b></p>
            }
            {
              props.status !== null && <p className="card-text" style={{ "color": "#c694f7" }}>Released Date <b>{props.status}</b></p>
            }
            {
              props.info !== null && <p className="card-text" style={{ "color": "#c694f7" }}>Eps No {props.info}<b>{props.status}</b></p>
            }

          </div>
        </div>
        </Link>
      </div>





  )
}
