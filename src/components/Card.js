import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { Popover, ArrowContainer } from 'react-tiny-popover'
import Svg from './Svg';

function Card({course,reference}) {
    const { image_480x270, id, title, rating, price,
        visible_instructors, num_reviews, last_update_date, content_info_short, headline, objectives_summary } = course;
    let names = ''
    visible_instructors.forEach(i => {
        names += i.title + ", ";
    });
    names = names.substring(0, names.length - 2);
    const [love, setLove] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    /*let template = ``;*/
    return (
        <>
            <Popover
                isOpen={isPopoverOpen}
                positions={['right', 'left', 'top', 'bottom']}
                padding={-30}
                onClickOutside={() => setIsPopoverOpen(false)}
                content={({ position, childRect, popoverRect }) => (
                    <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                        position={position}
                        childRect={childRect}
                        popoverRect={popoverRect}
                        arrowColor={'blue'}
                        arrowSize={10}
                        arrowStyle={{ opacity: 0.7 }}
                        className='popover-arrow-container'
                        arrowClassName='popover-arrow'
                    >
                        <div className="popover d-block" onMouseLeave={() => setIsPopoverOpen(false)} onMouseEnter={() => setIsPopoverOpen(true)} role="tooltip"><div className="arrow"></div>
                            <h5 className="popover-header bg-white">{title}</h5>
                            <div className="popover-body">
                                <h6 className="text-muted small">last update {last_update_date}</h6>
                                <h6 className="text-muted small">{content_info_short} All Levels Subtitles</h6>
                                <h6 className="text-muted small">{headline} All Levels Subtitles</h6>
                                {objectives_summary.map((obj) =>
                                    <div key={obj}>
                                        <Svg svg="checkIcon"></Svg>
                                        <small>{obj}</small>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button className="btn m-3 text-white rounded-0 col-6" style={{ backgroundColor: "purple" }}>Add to Card</button>
                                <button className={love ? "d-none" : "btn"} onClick={() => setLove(true)}>
                                    <Svg svg="heartIcon"></Svg>
                                </button>
                                <button className={love ? "btn" : "d-none"} onClick={() => setLove(false)}>
                                    <Svg svg="heartFillIcon"></Svg>
                                </button>
                            </div>
                        </div>
                    </ArrowContainer>
                )}
            >
                <Link onMouseLeave={() => setIsPopoverOpen(false)} onMouseEnter={() => setIsPopoverOpen(true)} to={`/details/${id}`} className='d-block text-decoration-none text-black'>
                    <div className="card m-2" ref={reference} style={{ width: "17rem", height: "24rem", boxShadow: "2px 2px grey" }}>
                        <img className="card-img-top" src={image_480x270} alt="course Logo" width="100%" />
                        <div className="card-body position-relative">
                            <h5 className='card-title'>{title} </h5>
                            <p className='text-muted'>{names}</p>
                            <div className="mb-3 position-absolute" style={{ bottom: "0px" }}>
                                <div className="d-flex align-items-center" style={{ color: "darkorange" }}>
                                    <span style={{ fontSize: "20px", color: "rgb(248, 165, 23)" }}>{parseFloat(rating).toFixed(1)}
                                    </span>
                                    <ReactStars classNames="mx-1" count={rating} size={24} color="#ffd700" edit={false}></ReactStars>
                                    <span className='text-decoration-underline' style={{ color: "lightblue" }}>({num_reviews || "56665"})</span>
                                </div>
                                <div className='d-block'>
                                    <span> price :</span>
                                    <b id="course-price">${price}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </Popover>
        </>

    );
}

export default Card;