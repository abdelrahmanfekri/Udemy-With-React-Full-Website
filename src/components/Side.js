import React from 'react'
import Svg from './Svg'

export default function Side({ course }) {
    return (
        <div style={{ width: "23%", left: "72%", top: "40px", height: "100%" }} className="position-absolute d-none d-lg-block">
            <img className="w-100" alt="course" src={course[0].image_750x422}></img>
            <div className='sticky-top bg-white shadow p-2' style={{ top: "20px" }}>
                <h6 className='text-center text-white bg-dark' style={{ height: "30px" }}>preview this course</h6>
                <div style={{ width: "90%" }} className="m-auto mt-1 d-flex justify-content-around align-items-center">
                    <span className="h3 text-bold">{course[0].price}EGP</span>
                    <span className="text-decoration-line-through text-muted h5">{course[0].discount * course[0].price + course[0].price}EGP</span>
                    <span className="h5 text-muted">{course[0].discount * 100}%off</span>
                </div>
                <div style={{ width: "90%" }} className="m-auto">
                    <Svg svg="alarmDanger"></Svg>
                    <span className="text-danger h6">{course[0].timeToEndDisc} day left at this price</span>
                </div>
                <div style={{ width: "90%" }} className="m-auto mt-1">
                    <button style={{ backgroundColor: "purple" }} className="btn text-white btn-outline-dark my-2 rounded-0 w-100 text-center"> Add to cart </button>
                    <button className="btn btn-outline-dark my-1 rounded-0 w-100 text-center">Buy now</button>
                    <h6 className="text-center">30-Day Money Back Guarantee</h6>
                </div>
                <div style={{ width: "90%" }} className="m-auto">
                    <h5>This course includes:</h5>
                    <div>
                        <Svg svg="play"></Svg>
                        <span className="h6 ms-2 text-muted">hours on-demand video</span>
                    </div>
                    <div>
                        <Svg svg="sticker"></Svg>
                        <span className="h6 ms-2 text-muted">article</span>
                    </div>
                    <div>
                        <Svg svg="arrowDownCircle"></Svg>
                        <span className="h6 ms-2 text-muted">downloadable resources</span>
                    </div>
                    <div>
                        <Svg svg="infinity"></Svg>
                        <span className="h6 ms-2 text-muted">full lifetime access</span>
                    </div>
                    <div>
                        <Svg svg="phoneLandScape"></Svg>
                        <span className="h6 ms-2 text-muted">Access on mobile and TV</span>
                    </div>
                    <div>
                        <Svg svg="trophyFill"></Svg>
                        <span className="h6 ms-2 text-muted">Certificate of completion</span>
                    </div>
                </div>
                <div style={{ width: "90%" }} className="m-auto d-flex justify-content-around">
                    <span className="btn btn-outline-white btn-link text-black p-0 h6">share</span>
                    <span className="btn btn-outline-white btn-link text-black p-0 h6">Git this course</span>
                    <span className="btn btn-outline-white btn-link text-black p-0 h6">Apply Coupon</span>
                </div>
                <hr className="w-100 my-2"></hr>
                <div style={{ width: "90%" }} className="m-auto mb-5">
                    <h6>Training 5 or more people?</h6>
                    <p>Get your team access to 17,000+ top Udemy courses anytime,anywhere.</p>
                    <button className="btn btn-outline-dark rounded-0 text-center w-100">Try Udemy Business</button>
                </div>
            </div>
        </div>
    )
}
