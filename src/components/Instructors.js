import React from 'react'
import { useState } from 'react'
import style from '../index.module.css'
import Svg from './Svg';

export default function Instructors({ instructors }) {
    const [index, setIndex] = useState(1);

    return (<div className={"mt-4 " + style.widthRes}>
        <h4>Instructors</h4>
        {instructors.map((inst) =>
            <div key={inst.title}>
                <button className="btn btn-link p-0 m-0">{inst.title}</button>
                <p>{inst.job_title}</p>
                <div className="container d-flex">
                    <img className="rounded-circle img-fluid" style={{ width: "12vh" }} src={inst.image_100x100} alt="instructor"></img>
                    <div>
                        <div className='ms-2'>
                            <Svg svg="starIcon"></Svg>
                            <b className="ms-2">{inst.rating} Instructor rating</b>
                        </div>
                        <div className='mt-2 ms-2'>
                            <Svg svg="yelpIcon"></Svg>
                            <b className="ms-2 d-inline">{inst.reviews} reviews</b>
                        </div>
                        <div className='mt-2 ms-2'>
                            <Svg svg="yelpIcon"></Svg>
                            <b className="ms-2 d-inline">{inst.noStudent} Students</b>
                        </div>
                        <div className='mt-2 ms-2'>
                            <Svg svg="yelpIcon"></Svg>
                            <b className="ms-2 ms-2 d-inline">{inst.noCourse} Courses</b>
                        </div>
                    </div>
                </div>
                <div className="container m-2 mt-4">
                    {inst.description.map((des) => <div className={(des._index > index) ? "d-none" : "d-block"} key={"insDescription" + des._index} >{des.data}</div>)}
                    <button className={(index < inst.description.length) ? "btn btn-link p-0 m-2" : "d-none"} onClick={() => setIndex(index + 1)}>show more</button>
                    <button className={(index > 1) ? "btn btn-link p-0 m-2" : "d-none"} onClick={() => setIndex(index - 1)}>show less</button>
                </div>
            </div>
        )}
    </div>)
}
