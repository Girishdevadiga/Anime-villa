import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../Styles/card.css'
export default function  CardSkeleton
() {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center my-2 text-center flex-column'> 
        <Skeleton className='card anime-card text-center card-img-top card-img '  
         width={"18rem"} 
         height={"23rem"}
        baseColor={"#655061"}
        duration={1}
         highlightColor={"rgb(46, 41, 41)"} />
        <Skeleton className='card-text' count={3} 
        duration={1}
        width={"13rem"} 
        baseColor={"#655061"}
         highlightColor={"rgb(46, 41, 41)"} />

    </div>
  )
}
