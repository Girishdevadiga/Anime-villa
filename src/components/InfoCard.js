import React from 'react'

export default function InfoCard(props) {
 
  return (
    <div className='main-info'>
      <div className='row p-2 pt-3 d.flex justify-content-center py-4 '>
        <div className="col-lg-4 col-md-4 col-sm-12 col-9 d-flex justify-content-center ">
          <img className='rounded info-img' src={props.url} alt="Anime Poster" />
        </div>
        <div className=" col-lg-6 col-md-6 col-sm-12 col-9">
          <div className="p-3">
            <p className='h5 text-light my-6 '>{props.title}</p>
            <p className='anime-info my-4 '><b>Type : </b> <span className='text-light h6 my-4 '>{props.type}</span></p>
            <p className='anime-info h6 my-4 '><b> Summary : </b><span className='text-light h6 my-4 '>{props.summary}</span> </p>
            <p className='anime-info h6 my-4 ' ><b>Genre : </b>  {props.genre.map((ele)=>{
              return <span className='text-light mx-1'>{ele}</span>
            })}</p>
            <p className='anime-info my-4 '><b>Total Eps : </b> <span className='text-light h6 my-4 '>{props.totalEps!=="0" ? props.totalEps : <span style={{"color":"violet"}}>Coming Soon!</span>}</span></p>
            <p className='anime-info h6 my-4 '><b>Released : </b> <span className='text-light'>{props.date}</span></p>
            <p className='anime-info h6 my-4 '><b>Status : </b> <span className='text-light'>{props.status}</span> </p>
            <p className='anime-info h6 my-4 '><b>Other names:</b> <span className='text-light'>{props.otherNames}</span>  </p>
          </div>

        </div>

      </div>
    </div>

  )
}
//"color":"#e9e70c","fontSize":"0.7rem"