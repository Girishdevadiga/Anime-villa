import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search';
import axios from 'axios';
import Card from '../components/Card';
import { useState, useEffect, useRef} from 'react';
import CardSkeleton from '../components/CardSkeleton'
import '../Styles/container.css';

export default function Movies() {

  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [data, setData] = useState([]);
  const [load, setload] = useState(false);
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    setload(true);
    axios.get(process.env.REACT_APP_MOVIES_API + `?page=${page}`)
      .then(res => setData(res.data))
      .then(() => setload(false));
  }, [page])

  const searchHandler = (val) => {
    setload(true)
    setsearch(true);
    console.log(data.length);
    axios.get(process.env.REACT_APP_SEARCH_API + `keyw=${val}`)
      .then(res => setData(res.data));
    setTimeout(() => {
      setload(false);
    }, 1500);
  }

  const nextClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    setpage(page + 1)
    

  }
  const prevClick = () => {
    setpage(page - 1)
  }


  return (

    <div className='container'>
      <div className='row d-flex justify-content-between' ref={ref}>
        <div className="col-lg-6"> <Navbar /></div>
        <div className="col-lg-6 my-auto  "> <Search searchFun={searchHandler} /></div>
      </div>

    {
      search&&
      data.length===0 &&
      <div className='my-2'>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>No Anime found!</strong> The anime you're searching is not available or check your spelling. click here to 
           <a href="/movies" className='text-primary'> Reload</a> the page
        </div>
      </div>
    }


      <div className="card-container rounded mt-3">
        <div className='row'>
          {load ?
            num.map((ele) => {
              return <CardSkeleton key={ele} />
            })
            :

            data.map((ele) => {
              return (<Card
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
        {data.length !== 0 &&
          <div className="container page flex-row navbar-nav my-auto justify-content-between w-100 rounded p-2" style={{ "backgroundColor": "#000" }}>
            <button
              className={page > 1 ? "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark p-2" : "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark disabled p-2 "}
              onClick={prevClick}>&larr; Prev
            </button>
            <button
              className={data.length === 20 ? "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark p-2" : "nav-link btn btn-dark btn-outline p-1 mx-2 border border-dark disabled p-2"}
              onClick={nextClick}>Next &rarr;
            </button> </div>
        }

        <div className='d-flex justify-content-center'>
          <p>&copy; Anime Villa 2022</p>
        </div>

      </div>
    </div>

  )
}
