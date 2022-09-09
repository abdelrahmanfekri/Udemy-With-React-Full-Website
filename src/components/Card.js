import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { Popover, ArrowContainer } from 'react-tiny-popover'

function Card(props) {
    const { image_480x270, id, title, rating, price,
        visible_instructors, num_reviews, last_update_date, content_info_short, headline, objectives_summary } = props.course;
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                        </svg>
                                        <small>{obj}</small>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button className="btn m-3 text-white rounded-0 col-6" style={{ backgroundColor: "purple" }}>Add to Card</button>
                                <button className={love ? "d-none" : "btn"} onClick={() => setLove(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>

                                </button>
                                <button className={love ? "btn" : "d-none"} onClick={() => setLove(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill text-danger" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </ArrowContainer>
                )}
            >
                <Link onMouseLeave={() => setIsPopoverOpen(false)} onMouseEnter={() => setIsPopoverOpen(true)} to={`/details/${id}`} className='d-block text-decoration-none text-black'>
                    <div className="card m-2" style={{ width: "17rem", height: "24rem", boxShadow: "2px 2px grey" }}>
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