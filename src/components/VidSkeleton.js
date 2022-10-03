import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../Styles/vid.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function VidSkeleton() {
    const [width, setwidth] = useState(window.innerWidth)

    useEffect(()=>{
        setwidth(window.innerWidth)
    },[])
    return (

        <div className='d-flex justify-content-center my-1'>
            <Skeleton
                width={width>600?"50rem":"20rem"}
                height={width>600? "35rem" : "13rem"}
                duration={0.8}
                baseColor={"#655061"}
                highlightColor={"rgb(46, 41, 41)"}

            />
        </div>

    )
}
