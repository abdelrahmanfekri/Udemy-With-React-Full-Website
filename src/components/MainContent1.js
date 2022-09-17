import React from 'react'
import style from '../index.module.css'
import StarRatings from 'react-star-ratings';
import Svg from './Svg';

export default function MainContent1({ course, instructors }) {
    let names = ''
    if (instructors)
        instructors.forEach(i => {
            names += i.title + ", ";
        });
    names = names.substring(0, names.length - 2);
    return (
        <div className={"bg-dark d-flex row"} style={{ top: "0" }}>
            <img className={'d-block d-lg-none mt-3 ' + style.widthRes} alt={course[0].title} src={course[0].image_750x422}></img>
            <div className={"mt-4 " + style.widthRes}>
                <div>
                    <span style={{ color: "lightblue" }}>Category</span>
                    <Svg svg="chevron"></Svg>
                    <span style={{ color: "lightblue" }}>Course Type</span>
                    <Svg svg="chevron"></Svg>
                    <span style={{ color: "lightblue" }}>Course Title</span>
                </div>
                <h3 className="text-white text-bold">{course[0].title}</h3>
                <p className='text-white'>{course[0].headline}</p>
                <div className="d-flex align-items-end" style={{ color: "darkorange", display: "flex", alignItems: "center" }}>
                    <span style={{ color: "rgb(248, 165, 23)" }}>{parseFloat(course[0].rating).toFixed(1)}
                    </span>
                    <StarRatings starDimension="1rem" starSpacing="1px" rating={course[0].rating} starRatedColor="orange" numberOfStars={5}></StarRatings>
                    <span className='text-decoration-underline ms-1' style={{ color: "lightblue" }}>({course[0].num_reviews || "56665"} rating)</span>
                    <span className='text-white ms-1'>{course[0].num_subscribers || "18,857"} student</span>
                </div>
                <div>
                    <span className="text-white small">Created by</span>
                    <span className="small text-decoration-underline mx-2" style={{ color: "lightblue" }}>{names}</span>
                </div>
                <div className='d-flex align-items-center'>
                    <Svg svg="exclamationIcon"></Svg>
                    <span className='small text-white mx-2'>last updated {course[0].last_update_date}</span>
                    <Svg svg="globe2"></Svg>
                    <span className='small text-white'>{course[0].caption_languages[0] || "English"}</span>
                    <Svg svg="badgeCC"></Svg>
                    <span className='small text-white'>{course[0].caption_languages[0] || "English"}</span>
                </div>
            </div>
        </div>
    )
}

