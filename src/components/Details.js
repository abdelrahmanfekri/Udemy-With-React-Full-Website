import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import { context } from "../App.js";
import ReactLoading from 'react-loading';
import style from '../index.module.css'
import StarRatings from 'react-star-ratings';

export default function Details() {
  const { id } = useParams();
  const allData = useContext(context);
  const [data, setData] = useState({ data: null, isLoading: true, error: null });
  const [reviews, setReviews] = useState({ data: null, isLoading: true, error: null });
  let course = allData["data"] && allData["data"]["courses"]["items"].filter((c) => c.id === Number(id));
  useEffect(() => {
    let url = "http://localhost:3001/" + id;
    fetch(url).then((res) => res.json()).then((json) => setData({ data: json, isLoading: false, error: null }))
      .catch((err) => setData({ data: null, isLoading: false, error: "sorry some thing wrong please check your internet connection" }))
  }
    , [id]);
  useEffect(() => {
    let url = "http://localhost:3002/" + id;
    fetch(url).then((res) => res.json()).then((json) => setReviews({ data: json, isLoading: false }))
      .catch((err) => setReviews({ data: null, isLoading: false, error: "sorry some thing wrong please check your internet connection" }))
  }
    , [id]);
  let instructors = course && course[0].visible_instructors;
  let review = (reviews["data"] ? reviews["data"] : null);

  let details = (data["data"]) ? data["data"][0]["curriculum_context"]["data"] : null;
  return (
    <>
      <Nav></Nav>
      <div>
        {(allData["isLoading"] || data["isLoading"] || reviews["isLoading"]) && <ReactLoading className='m-auto mt-5' type={"spokes"} color={"#000"} ></ReactLoading>}
        {(course && data["data"] && reviews["data"]) &&
          <>
            <div className='d-flex flex-column position-relative'>
              <MainContent1 course={course} instructors={instructors}></MainContent1>
              <Need course={course}></Need>
              <Sections details={details} course={course}></Sections>
              <ReqAndDes course={course} details={details}></ReqAndDes>
              <Instructors instructors={instructors}></Instructors>
              <Rating course={course} review={review}></Rating>
              <Reviews course={course} review={review}></Reviews>
              <Footer></Footer>
              <Side course={course}></Side>
            </div>
          </>
        }
        {(allData["error"] || data["error"] || reviews["error"]) && <div className="d-block m-auto" style={{ color: "red" }}>sorry some thing is wrong please check you internet connection</div>}
      </div>
    </>
  )
}
function Side({ course }) {
  return (
    <div style={{ width: "23%", left: "72%", top: "40px",height:"100%" }} className="position-absolute d-none d-lg-block">
      <img className="w-100" alt="course" src={course[0].image_750x422}></img>
      <div className='sticky-top bg-white shadow p-2' style={{top:"20px"}}>
        <h6 className='text-center text-white bg-dark' style={{height:"30px"}}>preview this course</h6>
        <div style={{ width: "90%" }} className="m-auto mt-1 d-flex justify-content-around align-items-center">
          <span className="h3 text-bold">{course[0].price}EGP</span>
          <span className="text-decoration-line-through text-muted h5">{course[0].discount * course[0].price + course[0].price}EGP</span>
          <span className="h5 text-muted">{course[0].discount * 100}%off</span>
        </div>
        <div style={{ width: "90%" }} className="m-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm text-danger" viewBox="0 0 16 16">
            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
            <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
          </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
            </svg>
            <span className="h6 ms-2 text-muted">hours on-demand video</span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-stickies" viewBox="0 0 16 16">
              <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z" />
              <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
            </svg>
            <span className="h6 ms-2 text-muted">article</span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
            <span className="h6 ms-2 text-muted">downloadable resources</span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-infinity" viewBox="0 0 16 16">
              <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z" />
            </svg>
            <span className="h6 ms-2 text-muted">full lifetime access</span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone-landscape" viewBox="0 0 16 16">
              <path d="M1 4.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6zm-1 6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v6z" />
              <path d="M14 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
            </svg>
            <span className="h6 ms-2 text-muted">Access on mobile and TV</span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16">
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
            </svg>
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

function MainContent1({ course, instructors }) {
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-2 text-white bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <span style={{ color: "lightblue" }}>Course Type</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-2 text-white bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white bi bi-exclamation-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
          <span className='small text-white mx-2'>last updated {course[0].last_update_date}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-2 bi bi-globe text-white" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
          </svg>
          <span className='small text-white'>{course[0].caption_languages[0] || "English"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-2 bi bi-badge-cc text-white" viewBox="0 0 16 16">
            <path d="M3.708 7.755c0-1.111.488-1.753 1.319-1.753.681 0 1.138.47 1.186 1.107H7.36V7c-.052-1.186-1.024-2-2.342-2C3.414 5 2.5 6.05 2.5 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114H6.213c-.048.615-.496 1.05-1.186 1.05-.84 0-1.319-.62-1.319-1.727v-.743zm6.14 0c0-1.111.488-1.753 1.318-1.753.682 0 1.139.47 1.187 1.107H13.5V7c-.053-1.186-1.024-2-2.342-2C9.554 5 8.64 6.05 8.64 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.743z" />
            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
          </svg>
          <span className='small text-white'>{course[0].caption_languages[0] || "English"}</span>
        </div>
      </div>
    </div>
  )
}
function Need({ course }) {
  return (
    <div className={style.widthRes}>
      <div className="border ps-3 py-3 mt-3 border-2">
        <h5>What you'll learn</h5>
        <div className="d-flex row">
          {course[0].objectives_summary.map((obj) =>
            <div key={obj} className="col-12 col-md-6 col-lg-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
              <small>{obj}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
function Sections({ details, course }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className={"mt-3 accordion " + style.widthRes} id="accordionExample">
      <div className='my-2'>
        <h4 className='my-2'>Course content</h4>
        <div className='d-flex w-100 justify-content-between'>
          <small>{details.sections.length} sections ,{details.num_of_published_lectures} lectures {course[0].content_info_short} total length</small>
          <button onClick={() => setExpand(true)} className={expand ? 'd-none' : "btn btn-link"}>Expand All</button>
          <button onClick={() => setExpand(false)} className={expand ? 'btn btn-link' : "d-none"}>Collapse All</button>
        </div>
      </div>
      {details.sections.map((section) =>
        <div key={section.index} className="accordion-item">
          <h2 className="accordion-header" id={"head" + section.index}>
            <button className={"accordion-button text-center " + style.accordionButton + (expand ? "" : " collapsed")} type="button" data-bs-toggle="collapse" data-bs-target={"#section" + section.index} aria-expanded="true" aria-controls={"section" + section.index}>
              <div className="d-flex w-100 justify-content-between">
                <h6 className="text-black text-start">{section.title}</h6>
                <p className="text-black text-end small">{section.lecture_count} lectures {section.content_length_text}min</p>
              </div>
            </button>
          </h2>
          <div id={"section" + section.index} className={"accordion-collapse collapse " + (expand ? "show" : "")} aria-labelledby={"head" + section.index} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {section.items.map((item) =>
                <div key={section.index + "" + item.id} className="mb-2 d-flex w-100 bg-white align-items-center justify-content-between">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-play-file" viewBox="0 0 16 16">
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z" />
                    </svg>
                    <h6 className={item.can_be_previewed ? "d-inline m-1 text-inline" : "d-inline m-1"}>{item.title}</h6>
                  </div>
                  <div className='text-end'>
                    <button className={item.can_be_previewed ? "btn btn-link" : "d-none"}>preview</button>
                    <span className='m-1'>{item.content_summary}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
function ReqAndDes({ course, details }) {
  return (
    <div className={"mt-4 " + style.widthRes}>
      <h4>Requirements</h4>
      <ul>
        {course[0].requirement.map((req) => <li className='m-2' key={req}>{req}</li>)}
      </ul>
      <h4 className="m-2">Description</h4>
      {details.description.map((st) => <p className="m-3" key={st}>{st}</p>)}
    </div>
  )
}
function Instructors({ instructors }) {
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              <b className="ms-2">{inst.rating} Instructor rating</b>
            </div>
            <div className='mt-2 ms-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-yelp" viewBox="0 0 16 16">
                <path d="m4.188 10.095.736-.17a.824.824 0 0 0 .073-.02.813.813 0 0 0 .453-1.255 1.025 1.025 0 0 0-.3-.258 2.782 2.782 0 0 0-.428-.198l-.808-.295a76.035 76.035 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.143 2.143 0 0 0-.606-.116.723.723 0 0 0-.572.245 1.625 1.625 0 0 0-.105.132 1.555 1.555 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.785.785 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566.003.001Zm8.219-3.911a4.185 4.185 0 0 0-.8-1.14 1.602 1.602 0 0 0-.275-.21 1.591 1.591 0 0 0-.15-.073.723.723 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575-.34.345-.677.691-1.01 1.042l-.598.62a2.79 2.79 0 0 0-.298.365 1 1 0 0 0-.157.364.813.813 0 0 0 .007.301c0 .005.002.009.003.013a.812.812 0 0 0 .945.616.774.774 0 0 0 .074-.014l3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.787.787 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308ZM6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05c-.185.025-.37.06-.553.104a7.589 7.589 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857.022.01.045.018.068.025.15.057.313.068.469.032l.028-.007a.809.809 0 0 0 .377-.226.732.732 0 0 0 .053-.055Zm-.276 3.161a.737.737 0 0 0-.923-.234.976.976 0 0 0-.145.09 1.909 1.909 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705c-.29.395-.577.791-.861 1.193-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.73.73 0 0 0-.03.314c.013.11.05.217.108.312.031.047.064.093.1.138a1.548 1.548 0 0 0 .257.237 4.482 4.482 0 0 0 2.196.76 1.593 1.593 0 0 0 .349-.027 1.57 1.57 0 0 0 .163-.048.797.797 0 0 0 .278-.178.731.731 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821.025-.49.044-.98.06-1.469l.033-.87a2.09 2.09 0 0 0-.055-.623.93.93 0 0 0-.117-.27Zm5.783 1.362a2.199 2.199 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398-.43-.236-.86-.466-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a1.908 1.908 0 0 0-.466-.166.993.993 0 0 0-.17-.018.738.738 0 0 0-.725.616.946.946 0 0 0 .01.293c.038.204.13.406.224.583l.41.768c.228.434.459.864.696 1.294.152.28.28.52.398.719.023.037.048.077.068.112.145.239.261.39.379.497a.73.73 0 0 0 .596.201 1.55 1.55 0 0 0 .168-.029 1.584 1.584 0 0 0 .325-.129 4.06 4.06 0 0 0 .855-.64c.306-.3.577-.63.788-1.006.03-.053.055-.109.076-.165a1.58 1.58 0 0 0 .051-.161c.013-.056.022-.111.029-.168a.792.792 0 0 0-.038-.327.73.73 0 0 0-.165-.27Z" />
              </svg>
              <b className="ms-2 d-inline">{inst.reviews} reviews</b>
            </div>
            <div className='mt-2 ms-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-yelp" viewBox="0 0 16 16">
                <path d="m4.188 10.095.736-.17a.824.824 0 0 0 .073-.02.813.813 0 0 0 .453-1.255 1.025 1.025 0 0 0-.3-.258 2.782 2.782 0 0 0-.428-.198l-.808-.295a76.035 76.035 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.143 2.143 0 0 0-.606-.116.723.723 0 0 0-.572.245 1.625 1.625 0 0 0-.105.132 1.555 1.555 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.785.785 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566.003.001Zm8.219-3.911a4.185 4.185 0 0 0-.8-1.14 1.602 1.602 0 0 0-.275-.21 1.591 1.591 0 0 0-.15-.073.723.723 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575-.34.345-.677.691-1.01 1.042l-.598.62a2.79 2.79 0 0 0-.298.365 1 1 0 0 0-.157.364.813.813 0 0 0 .007.301c0 .005.002.009.003.013a.812.812 0 0 0 .945.616.774.774 0 0 0 .074-.014l3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.787.787 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308ZM6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05c-.185.025-.37.06-.553.104a7.589 7.589 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857.022.01.045.018.068.025.15.057.313.068.469.032l.028-.007a.809.809 0 0 0 .377-.226.732.732 0 0 0 .053-.055Zm-.276 3.161a.737.737 0 0 0-.923-.234.976.976 0 0 0-.145.09 1.909 1.909 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705c-.29.395-.577.791-.861 1.193-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.73.73 0 0 0-.03.314c.013.11.05.217.108.312.031.047.064.093.1.138a1.548 1.548 0 0 0 .257.237 4.482 4.482 0 0 0 2.196.76 1.593 1.593 0 0 0 .349-.027 1.57 1.57 0 0 0 .163-.048.797.797 0 0 0 .278-.178.731.731 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821.025-.49.044-.98.06-1.469l.033-.87a2.09 2.09 0 0 0-.055-.623.93.93 0 0 0-.117-.27Zm5.783 1.362a2.199 2.199 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398-.43-.236-.86-.466-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a1.908 1.908 0 0 0-.466-.166.993.993 0 0 0-.17-.018.738.738 0 0 0-.725.616.946.946 0 0 0 .01.293c.038.204.13.406.224.583l.41.768c.228.434.459.864.696 1.294.152.28.28.52.398.719.023.037.048.077.068.112.145.239.261.39.379.497a.73.73 0 0 0 .596.201 1.55 1.55 0 0 0 .168-.029 1.584 1.584 0 0 0 .325-.129 4.06 4.06 0 0 0 .855-.64c.306-.3.577-.63.788-1.006.03-.053.055-.109.076-.165a1.58 1.58 0 0 0 .051-.161c.013-.056.022-.111.029-.168a.792.792 0 0 0-.038-.327.73.73 0 0 0-.165-.27Z" />
              </svg>
              <b className="ms-2 d-inline">{inst.noStudent} Students</b>
            </div>
            <div className='mt-2 ms-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-yelp" viewBox="0 0 16 16">
                <path d="m4.188 10.095.736-.17a.824.824 0 0 0 .073-.02.813.813 0 0 0 .453-1.255 1.025 1.025 0 0 0-.3-.258 2.782 2.782 0 0 0-.428-.198l-.808-.295a76.035 76.035 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.143 2.143 0 0 0-.606-.116.723.723 0 0 0-.572.245 1.625 1.625 0 0 0-.105.132 1.555 1.555 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.785.785 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566.003.001Zm8.219-3.911a4.185 4.185 0 0 0-.8-1.14 1.602 1.602 0 0 0-.275-.21 1.591 1.591 0 0 0-.15-.073.723.723 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575-.34.345-.677.691-1.01 1.042l-.598.62a2.79 2.79 0 0 0-.298.365 1 1 0 0 0-.157.364.813.813 0 0 0 .007.301c0 .005.002.009.003.013a.812.812 0 0 0 .945.616.774.774 0 0 0 .074-.014l3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.787.787 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308ZM6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05c-.185.025-.37.06-.553.104a7.589 7.589 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857.022.01.045.018.068.025.15.057.313.068.469.032l.028-.007a.809.809 0 0 0 .377-.226.732.732 0 0 0 .053-.055Zm-.276 3.161a.737.737 0 0 0-.923-.234.976.976 0 0 0-.145.09 1.909 1.909 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705c-.29.395-.577.791-.861 1.193-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.73.73 0 0 0-.03.314c.013.11.05.217.108.312.031.047.064.093.1.138a1.548 1.548 0 0 0 .257.237 4.482 4.482 0 0 0 2.196.76 1.593 1.593 0 0 0 .349-.027 1.57 1.57 0 0 0 .163-.048.797.797 0 0 0 .278-.178.731.731 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821.025-.49.044-.98.06-1.469l.033-.87a2.09 2.09 0 0 0-.055-.623.93.93 0 0 0-.117-.27Zm5.783 1.362a2.199 2.199 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398-.43-.236-.86-.466-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a1.908 1.908 0 0 0-.466-.166.993.993 0 0 0-.17-.018.738.738 0 0 0-.725.616.946.946 0 0 0 .01.293c.038.204.13.406.224.583l.41.768c.228.434.459.864.696 1.294.152.28.28.52.398.719.023.037.048.077.068.112.145.239.261.39.379.497a.73.73 0 0 0 .596.201 1.55 1.55 0 0 0 .168-.029 1.584 1.584 0 0 0 .325-.129 4.06 4.06 0 0 0 .855-.64c.306-.3.577-.63.788-1.006.03-.053.055-.109.076-.165a1.58 1.58 0 0 0 .051-.161c.013-.056.022-.111.029-.168a.792.792 0 0 0-.038-.327.73.73 0 0 0-.165-.27Z" />
              </svg>
              <b className="ms-2 ms-2 d-inline">{inst.noCourse} Courses</b>
            </div>
          </div>
        </div>
        <div className="container m-2 mt-4">
          {inst.description.map((des) => <div key={des}>{des}</div>)}
        </div>
      </div>
    )}
  </div>)
}
function Rating({ course, review }) {
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
function Reviews({ review }) {
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState("All rating");
  const arr = new Array(review.results.length).fill({ l1: true, l2: false, l3: true, l4: false });
  const [like, setLike] = useState(arr);
  const [search, setSearch] = useState("");
  const [searchR, setSearchR] = useState({ render: false, no: 0 });
  const [rev1, setRev1] = useState({ ...review });
  function searchReview(event) {
    event.preventDefault();
    if (search === "") {
      setRev1({ ...review });
      setSearchR({ render: false, no: 0 });
      return;
    }
    let tmp = review.results.filter((res) => res.content_html.toLowerCase().includes(search.toLowerCase()));
    let resTmp = new Array(tmp.length);
    for (let i = 0; i < resTmp.length; i++) {
      resTmp[i] = { ...tmp[i] };
    }
    tmp = resTmp;
    //console.log(resTmp);
    for (let i = 0; i < tmp.length; i++) {
      const re = new RegExp(search, 'gi');
      tmp[i].content_html = tmp[i].content_html.replaceAll(re, `<b>${search}</b>`);
    }
    tmp = { ...review, "results": tmp }
    setSearchR({ render: true, no: resTmp.length });
    setRev1(tmp);
    //console.log(review);
  }
  function convert(html) {
    return { __html: html };
  }
  return (
    <div className={"mt-5 " + style.widthRes}>
      <h3>Reviews</h3>
      <div className="d-flex">
        <form onSubmit={searchReview} className="w-100">
          <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" placeholder='search for reviews' className="w-75 my-2" style={{ height: "5vh" }}></input>
          <button className="bg-black" style={{ height: "5vh", width: "5vh" }} type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
        <div className="dropdown my-2" >
          <button className="btn btn-outline-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {value}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={() => { setRating(0); setValue("All rating"); }} className="btn dropdown-item">All rating</li>
            <li onClick={() => { setRating(5); setValue("rating 5"); }} className="btn dropdown-item">rating 5</li>
            <li onClick={() => { setRating(4); setValue("rating 4"); }} className="btn dropdown-item">rating 4</li>
            <li onClick={() => { setRating(3); setValue("rating 3"); }} className="btn dropdown-item">rating 3</li>
            <li onClick={() => { setRating(2); setValue("rating 2"); }} className="btn dropdown-item">rating 2</li>
            <li onClick={() => { setRating(1); setValue("rating 1"); }} className="btn dropdown-item">rating 1</li>
          </ul>
        </div>
      </div>
      <h6 className={(searchR.render) ? "d-block" : "d-none"}>{searchR.no} Search results for "{search}"</h6>
      {rev1.results.map((res) =>
        <div key={res.id} className={(rating === 0 || rating === res.rating) ? `mt-2 d-flex justify-content-start w-100` : "d-none"}>
          <div className="me-2">
            <img src={res.user.image_50x50} alt="reviewer"></img>
          </div>
          <div className='w-100'>
            <h4 className='w-100'>{res.user.title}</h4>
            <div className='d-flex align-items-center'>
              <StarRatings starDimension="20px" starSpacing="1px" rating={res.rating} starRatedColor="orange" numberOfStars={5}></StarRatings>
              <span className="m-2">{res.created_formatted_with_time_since}</span>
            </div>
            <div dangerouslySetInnerHTML={convert(res.content_html)}></div>
            <p className='text-muted'>Was this review helpful?</p>
            <div className='d-flex w-100 align-items-center'>
              <button onClick={() => {
                var x = (res._index - 1) + ""; let dic = {}; dic[x] = { l1: false, l2: true, l3: true, l4: false };
                setLike({ ...like, ...dic })
              }} className={(like[res._index - 1].l1) ? "w-25 btn btn-outline-white rounded-circle p-1 p-lg-3" : "d-none"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: "5vw", height: "5vh" }} className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
              </button>
              <button onClick={() => {
                var x = (res._index - 1) + ""; let dic = {}; dic[x] = { l1: true, l2: false, l3: true, l4: false };
                setLike({ ...like, ...dic })
              }} className={(like[res._index - 1].l2) ? "w-25 btn btn-outline-white rounded-circle p-1 p-lg-3" : "d-none"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: "5vw", height: "5vh" }} className="bi bi-hand-thumbs-up-fill text-primary" viewBox="0 0 16 16">
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                </svg>
              </button>
              <button onClick={() => {
                var x = (res._index - 1) + ""; let dic = {}; dic[x] = { l1: true, l2: false, l3: false, l4: true };
                setLike({ ...like, ...dic })
              }} className={(like[res._index - 1].l3) ? "w-25 m-1 btn btn-outline-white rounded-circle p-1 p-lg-3" : "d-none"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: "5vw", height: "5vh" }} className="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                  <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z" />
                </svg>
              </button>
              <button onClick={() => {
                var x = (res._index - 1) + ""; let dic = {}; dic[x] = { l1: true, l2: false, l3: true, l4: false };
                setLike({ ...like, ...dic })
              }} className={(like[res._index - 1].l4) ? "w-25 m-1 btn btn-outline-white rounded-circle p-1 p-lg-3" : "d-none"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: "5vw", height: "5vh" }} className="bi bi-hand-thumbs-down-fill text-primary m-auto" viewBox="0 0 16 16">
                  <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z" />
                </svg>
              </button>
              <p className="btn btn-link">report</p>
            </div>
            <hr></hr>
          </div>
        </div>
      )}
    </div>
  )
}

function Footer() {
  return (
    <div className="w-100 bg-dark footer p-4">
      <div className='d-flex justify-content-between flex-column'>
        <div>
          <h6 className="text-white">Top companies choose Udeymy Business to build in-demand career skills.</h6>
        </div>
        <div className="d-flex">
          <h6 className="m-2 text-white" >Nasdaq</h6>
          <h6 className="m-2 text-white" >box</h6>
          <h6 className="m-2 text-white">NetApp</h6>
          <h6 className="m-2 text-white">eventbrite</h6>
        </div>
      </div>
      <hr className='w-100 bg-white'></hr>
      <div className="d-flex">
        <div className='m-3 text-white'>
          <h6 className='small'>Udemy Business</h6>
          <h6 className='small'>Teach on Udemy</h6>
          <h6 className='small'>Get the app</h6>
          <h6 className='small'>About us</h6>
          <h6 className='small'>Contact Us</h6>
        </div>
        <div className='m-3 text-white'>
          <h6 className='small'>Careers</h6>
          <h6 className='small'>Blog</h6>
          <h6 className='small'>Help and Support</h6>
          <h6 className='small'>Amiliate</h6>
          <h6 className='small'>Inventors</h6>
        </div>
        <div className='m-3 text-white'>
          <h6 className='small'>Terms</h6>
          <h6 className='small'>Privacy policy</h6>
          <h6 className='small'>Cookie settings</h6>
          <h6 className='small'>Sitemap</h6>
          <h6 className='small'>Accessibility statement</h6>
        </div>
      </div>
      <div>
        <h5 className="text-center text-white">Udemy Project made by abdelrahman fekri</h5>
      </div>
    </div>
  )
}