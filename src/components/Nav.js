import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Style from "../index.module.css"
import Svg from './Svg';
export default function Nav({setSearchParams}) {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        setSearchParams({course:`${search}`});
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md shadow-sm p-0 m-1 bg-white" >
            <Link className="m-sm-2 text-dark text-decoration-none" to={"/"}><img src="../images/logo.png" style={{ width: "100px" }} alt="Udemy logo" /></Link>
            <button className="m-2 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <Link className="text-dark text-decoration-none" to={"/"}>Categories</Link>
                <form href="#courses-section" onSubmit={handleSubmit} className={Style.searchForm} style={{ backgroundColor: "lightblue", borderRadius: "20px" }}>
                    <button className="m-1" type="submit"
                        style={{ border: "0px", backgroundColor: "lightblue" }}>
                        <Svg svg="searchIcon"></Svg>
                    </button>
        
                    <input value={search} onChange={(e) => setSearch(e.target.value)} onFocus={() => {navigate('/')}} className='border-0 w-75' style={{height:"2.6rem", backgroundColor: "lightblue", outline: "none" }} type="search" name="course"
                        id="search-id" placeholder="Search for anything" />
                </form>
                <Link className="m-1 text-dark text-decoration-none" to="/">Udemy Business</Link>
                <Link className="text-dark text-decoration-none" to="/">Teach on Udemy</Link>
                <button className='m-1 btn'>
                    <Svg svg="cardIcon"></Svg>
                </button>
                <button className="m-1 p-1 btn btn-outline-dark">Login</button>
                <button className="p-1 btn btn-dark">Sign up</button>
                <button className='p-0 m-1 btn'>
                    <Svg svg="globe2"></Svg>
                </button>
            </div>
        </nav>
    )
}
