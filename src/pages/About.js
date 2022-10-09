import React from 'react'
import Navbar from '../components/Navbar'
import '../Styles/about.css'
import logo from '../coding.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faInstagram,faTelegram} from '@fortawesome/free-brands-svg-icons'
import { faCirclePlay, faHeart, faBolt, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { Zoom ,Slide } from '@mui/material'
export default function About() {
  let width = window.innerWidth;
  console.log(width);
  return (
    <div className='container-fluid' style={{ "backgroundColor": "#000" }}>
      <Navbar style={{ "backgroundColor": "#000" }}></Navbar>
      <div className='rounded mt-4' >
        <div className='row d-flex justify-content-center '>
        <Slide in="true" direction='right'>
          <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
            <h1>Hello there! </h1>
            <h3>Welcome to Anime Villa.</h3>
            <p className='text-muted'>Watch and Download your favorite anime for free.</p>
            {
              width > 600 &&
              <Link to="/">
                <p className='btn btn-dark p-3'>Start Watching <span className='mx-1'><FontAwesomeIcon icon={faCirclePlay} /></span></p>
              </Link>
            }
          </div>
          </Slide>
          <Zoom in={true}>
          <div className='col-sm-5 col-lg-3 col-md-5 col-6 d-flex align-items-center' >
            <img src={logo} alt="coder png" />
          </div>
          </Zoom>
          {
            width < 600 &&
            <Link to="/">
              <p className='btn btn-dark p-2'>Start Watching<span className='mx-1'><FontAwesomeIcon icon={faCirclePlay} /></span></p>
            </Link>
          }
        </div>
        <hr />
        <div className='row pt-2 ' >

          <div className='col-lg-4 col-md-4 col-sm-4 col-12 d-flex flex-column justify-content-center '>
            <i className='text-center'><FontAwesomeIcon className='heart fa-beat' style={{ "--fa-animation-duration": "3s" }} icon={faHeart} /></i>
            <h4 className='text-center  text-light mt-2'>Easy to use</h4>
            <p className='text-center text-muted'>Easy navigations with beautiful user interface</p>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center flex-column '>
            <i className='text-center mb-2'><FontAwesomeIcon className='bolt fa-shake' style={{ "--fa-animation-duration": "2s" }} icon={faBolt} /></i>
            <h4 className='text-center text-light mt-2'>Speed</h4>
            <p className='text-muted text-center'>
              Fastloading and no distracting Ads
            </p>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center flex-column '>

            <i className='text-center mb-2'><FontAwesomeIcon className='clapper fa-fade' style={{ "--fa-animation-duration": "2s" }} icon={faClapperboard} /></i>
            <h4 className='text-center text-light'>10000+ Series</h4>
            <p className='text-muted text-center'>Watch over upto 10k plus anime series</p>
          </div>
        </div>
        <hr className='text-light'/>
        <div>
          <h4 className='text-center text-muted'>
            Contact us
          </h4>
        </div>
        <div className='d-flex justify-content-center'>
          <Zoom in={true}>
          <a className='mx-2 ' href="https://github.com/Girishdevadiga"><FontAwesomeIcon className='fb' icon={faGithub} /></a>
          </Zoom>

          <Zoom in={true}>
          <a className='mx-2' href='https://www.instagram.com/wolfy_616_/'><FontAwesomeIcon className='fb' icon={faInstagram}/></a>
          </Zoom>

          <Zoom in={true}>
          <a className='mx-2' href='https://t.me/Chocky_616'><FontAwesomeIcon className='fb' icon={faTelegram}/></a>
          </Zoom>
        </div>
        <div className='d-flex justify-content-center'>
          <p className='my-3'>&copy; Anime Villa </p>
        </div>
      </div>
    </div>
  )
}
