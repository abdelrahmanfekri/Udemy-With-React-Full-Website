import React from 'react';
import style from '../index.module.css';
import Card from './Card.js';
import {useEffect, useContext } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import {context} from '../App.js';
let scrollSoFar = 0;
function Courses({ path, course }) {
  useEffect(() => {
    scrollSoFar = 0;
    document.getElementById("display-courses").scroll({ left: scrollSoFar, behavior: 'smooth' });
    if (course) {
      document.getElementById("courses-section").scrollIntoView();
    }
  })
  const allData = useContext(context);
  let resultCourses = null;
  if (allData["data"]) {
    if (course) {
      course = course.toUpperCase();
      let filter = allData["data"]["courses"]["items"];
      resultCourses = filter.filter((c) => c.title.toUpperCase().includes(course));
      if (Object.keys(resultCourses).length === 0) {
        return <div className='m-auto text-info display-5'>sorry no result found for this search </div>
      }
    } else {
      if (path) {
        resultCourses = allData["data"][path]["items"];
      } else {
        resultCourses = allData["data"]["courses"]["items"];
      }
    }   
  }
  return (<>
    {allData["isLoading"] && <div className='d-block m-auto'><ReactLoading type={"spokes"} color={"#000"} ></ReactLoading></div>}
    {resultCourses && resultCourses.map((course) => <Card key={course.id} course={course} />)}
    {allData["error"] && <div className="m-auto" style={{ color: "red" }}>sorry some thing is wrong please check you internet connection</div>}
  </>)
}
function carouselSlide(dir) {
  let scrollSize = Number(document.getElementById("display-courses").scrollWidth);
  let scrollWidth = Number(document.getElementsByClassName("card")[0].clientWidth) + 20;
  if (dir === "left") {
    if (scrollSoFar + scrollWidth < scrollSize) {
      scrollSoFar += scrollWidth;
      document.getElementById("display-courses").scroll({ left: scrollSoFar, behavior: 'smooth' });
    }
  } else {
    if (scrollSoFar > 0) {
      scrollSoFar -= scrollWidth;
      document.getElementById("display-courses").scroll({ left: scrollSoFar, behavior: 'smooth' });
    }
  }
}
export default function Section({ course }) {
  const { path } = useParams();
  return (
    <section id="courses-section" className={style.courses}>
      <h4>Expand your career opportunities with Python</h4>
      <p>
        Take one of Udemy's range of Python courses and learn how to code
        using this incredibly useful language. Its simple syntax and
        readability makes Python perfect for Flask, Django , data science, and
        machine learning. You'll learn how to build everything from games to
        sites to apps. Choose from a range of courses that will appeal to..
      </p>
      <button className={style.exploreBtn} id="explore-btn" ><b>Explore Python</b></button>
      <div className="carousel">
        <div className="carousel-inner" style={{ display: 'flex', justifyContent: 'flex-start' }} id="display-courses">
          <Courses path={path} course={course} ></Courses>
        </div>
        <button onClick={() => carouselSlide("right")} className='carousel-control-prev bg-dark rounded-circle m-auto' style={{ width: "7vh", height: "7vh" }}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button onClick={() => carouselSlide("left")} className="carousel-control-next bg-dark rounded-circle m-auto" style={{ width: "7vh", height: "7vh" }}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}
