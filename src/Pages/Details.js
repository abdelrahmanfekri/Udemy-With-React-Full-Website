import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Components/Nav';
import { context } from "../App.js";
import ReactLoading from 'react-loading';
import Side from '../Components/Side';
import MainContent1 from '../Components/MainContent1';
import Need from '../Components/Need';
import Sections from '../Components/Sections';
import Instructors from '../Components/Instructors';
import Rating from '../Components/Rating';
import Reviews from '../Components/Reviews';
import ReqAndDes from '../Components/ReqAndDes'
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
            <div className='d-flex flex-column position-relative mb-5'>
              <MainContent1 course={course} instructors={instructors}></MainContent1>
              <Need course={course}></Need>
              <Sections details={details} course={course}></Sections>
              <ReqAndDes course={course} details={details}></ReqAndDes>
              <Instructors instructors={instructors}></Instructors>
              <Rating course={course} review={review}></Rating>
              <Reviews course={course} review={review}></Reviews>
              <Side course={course}></Side>
            </div>
          </>
        }
        {(allData["error"] || data["error"] || reviews["error"]) && <div className="d-block m-auto" style={{ color: "red" }}>sorry some thing is wrong please check you internet connection</div>}
      </div>
    </>
  )
}