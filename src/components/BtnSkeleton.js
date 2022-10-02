import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../Styles/card.css'
export default function BtnSkeleton() {

    let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return (

        <div className="row">

            {
                count.map(() => {
                    return (
                        <div className="col-lg-2 col-md-3 col-sm-3 col-4 ">
                            <Skeleton
                                className='btn my-1 mx-1'
                                style={{ "width": "6rem", "height": "3rem" }}
                                duration={0.8}
                                baseColor={"#655061"}
                    highlightColor={"rgb(46, 41, 41)"}
                            />
                        </div>
                    )
                })
            }

        </div>

    )
}
