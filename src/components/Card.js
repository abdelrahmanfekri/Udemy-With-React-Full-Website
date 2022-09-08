import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
function Card(props) {
    const { image_480x270, id, title, rating, price, visible_instructors,num_reviews } = props.course;
    let names = ''
    visible_instructors.forEach(i => {
        names += i.title + ", ";
    });
    names = names.substring(0, names.length - 2);
    return (
        <Link to={`/details/${id}`} className='d-block text-decoration-none text-black'>
            <div className="card m-2" style={{ width: "18rem", height: "25rem", boxShadow: "2px 2px grey" }}>
                <img className="card-img-top" src={image_480x270} alt="course Logo" width="100%" />
                <div className="card-body position-relative">
                    <h5 className='card-title'>{title} </h5>
                    <p className='text-muted'>{names}</p>
                    <div className="mb-3 position-absolute" style={{bottom:"0px"}}>
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
    );
}

export default Card;