import React from 'react'
import StarRatings from 'react-star-ratings';
import style from '../index.module.css'

export default function Rating({ course, review }) {
    return (
      <div className={"mt-4 " + style.widthRes}>
        <h4>Students feedback</h4>
        <div className="d-flex flex-column flex-md-row">
          <div className='m-2 text-center' style={{ color: "darkorange" }}>
            <h1 style={{ fontSize: "10vh" }}>{parseFloat(course[0].rating).toFixed(1)}</h1>
            <StarRatings starDimension="0.9rem" starSpacing="1px" rating={course[0].rating} starRatedColor="orange" numberOfStars={5}></StarRatings>
            <h6 className="d-none d-md-block mt-1">Course Rating</h6>
            <h6 className="d-block d-md-none mt-1">Rating</h6>
          </div>
          <div className='mt-2 w-100'>
            <div className='d-flex align-items-end'>
              <div className="progress m-0" style={{ width: "65%", height: '15px' }}>
                <div className="progress-bar bg-secondary" style={{ width: review.rating5 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span><StarRatings className="m-0" starDimension="0.9rem" starSpacing="0" rating={5} starRatedColor="orange" numberOfStars={5}></StarRatings></span>
              <span className="btn btn-link ms-1 p-0">{review.rating5}</span>
            </div>
            <div className='d-flex align-items-end'>
              <div className="progress m-0" style={{ width: "65%", height: '15px' }}>
                <div className="progress-bar bg-secondary" style={{ width: review.rating4 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span><StarRatings className="m-0" starDimension="0.9rem" starSpacing="0" rating={4} starRatedColor="orange" numberOfStars={5}></StarRatings></span>
              <span className="p-0 ms-1 btn btn-link">{review.rating4}</span>
            </div>
            <div className='d-flex align-items-end'>
              <div className="progress m-0" style={{ width: "65%", height: '15px' }}>
                <div className="progress-bar bg-secondary" style={{ width: review.rating3 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span><StarRatings className="m-0" starDimension="0.9rem" starSpacing="0" rating={3} starRatedColor="orange" numberOfStars={5}></StarRatings></span>
              <span className="p-0 ms-1 btn btn-link">{review.rating3}</span>
            </div>
            <div className='d-flex align-items-end'>
              <div className="progress m-0" style={{ width: "65%", height: '15px' }}>
                <div className="progress-bar bg-secondary" style={{ width: review.rating2 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span><StarRatings className="m-0" starDimension="0.9rem" starSpacing="0" rating={2} starRatedColor="orange" numberOfStars={5}></StarRatings></span>
              <span className="p-0 ms-1 btn btn-link">{review.rating2}</span>
            </div>
            <div className='d-flex align-items-end'>
              <div className="progress m-0" style={{ width: "65%", height: '15px' }}>
                <div className="progress-bar bg-secondary" style={{ width: review.rating1 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span><StarRatings className="m-0" starDimension="0.9rem" starSpacing="0" rating={1} starRatedColor="orange" numberOfStars={5}></StarRatings></span>
              <span className="p-0 ms-1 btn btn-link">{review.rating1}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }