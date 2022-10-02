import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../Styles/card.css'
export default function InfoSkeleton
    () {
    return (
        <div className='row p-2 pt-3 py-4 d-flex justify-content-center'>
            <div className="col-lg-6 col-md-5 col-sm-12 d-flex justify-content-center ">
                
                <Skeleton
                    width={"18rem"}
                    height={"30rem"}
                    duration={0.8}
                    baseColor={"#655061"}
                    highlightColor={"rgb(46, 41, 41)"}
                />
            </div>

            <div className="col-lg-6 col-md-5 col-sm-12 p-5 ">
                <Skeleton count={1}
                    width={"100%"}
                    duration={0.8}
                    className={"my-4"}
                    baseColor={"#655061"}
                    highlightColor={"rgb(46, 41, 41)"} />
                <Skeleton count={5}
                    width={"70%"}
                    baseColor={"#655061"}
                    highlightColor={"rgb(46, 41, 41)"} />
                <Skeleton count={3}
                    className={"my-4"}
                    width={"70%"}
                    duration={0.8}
                    baseColor={"#655061"}
                    highlightColor={"rgb(46, 41, 41)"} />
                <Skeleton count={2}
                    className={"my-2"}
                    duration={0.8}
                    width={"70%"}
                    baseColor={"#655061"}
                    highlightColor={"rgb(46, 41, 41)"} />
            </div>

        </div>
    )
}
