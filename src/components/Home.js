import React from 'react'
import Section from './Section';
import { NavLink, useSearchParams } from 'react-router-dom';
import Style from "../index.module.css"
import Nav from './Nav.js';
function Selection() {
    return (
        <>
            <h4>A broad selection of courses</h4>
            <p>Choose from 204,00 online video courses with new additions published every month</p>
            <div>
                <NavLink to="/courses/python" className={({ isActive }) => (isActive) ? Style.activeLink : Style.Link}>Python</NavLink>
                <NavLink to="/courses/excel" className={({ isActive }) => (isActive) ? Style.activeLink : Style.Link}>Excel</NavLink>
                <NavLink to="/courses/web" className={({ isActive }) => (isActive) ? Style.activeLink : Style.Link}>WebDevelopment</NavLink>
                <NavLink to="/courses/js" className={({ isActive }) => (isActive) ? Style.activeLink : Style.Link}>JavaScript</NavLink>
                <NavLink to="/courses/dataScience" className={({ isActive }) => (isActive) ? Style.activeLink : Style.Link}>Data Science</NavLink>
                <NavLink to="/courses/aws" className={({ isActive }) => (isActive) ? Style.activeLink : Style.Link}>AWS Certification</NavLink>
                <NavLink to="/courses/draw" className={({ isActive }) => (isActive) ? Style.activeLink : Style.Link}>Drawing</NavLink>
            </div>
        </>
    )
}

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams("");
    let course = searchParams.get("course");
    return (
        <>
            <Nav setSearchParams={setSearchParams}></Nav>
            <main className='position-relative m-4'>
                <img className='w-100' alt="time to start" src="../images/head.jpg" />
                <div className="d-none d-md-block container position-absolute m-4 w-25 p-2" style={{top:"10px",backgroundColor:"white"}}>
                    <h5>New to Udemy?Lucky you.</h5>
                    <p className='small'>
                        Courses start at 169.99 EGP. Get you new-student offer before it
                        expires.
                    </p>
                </div>
            </main>
            <div className='container'>
                <Selection></Selection>
                <Section course={course}></Section>
            </div>
            <footer className='container footer text-center bg-dark w-100 mt-4' style={{height:"5rem"}}>
                <h5 className="m-auto text-white">react copy with react,bootstrap,css,JavaScript</h5>
            </footer>
        </>
    )
}
