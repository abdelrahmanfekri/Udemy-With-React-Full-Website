import React from 'react'
import {useState} from 'react'
import style from '../index.module.css'
import StarRatings from 'react-star-ratings'
import Svg from './Svg';
export default function Reviews({ review }) {
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
                        <Svg svg="searchIcon"></Svg>
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
                            }} className={(like[res._index - 1].l1) ? "w-25 btn btn-outline-white rounded-circle p-1 p-lg-3 border-white" : "d-none"}>
                                <Svg svg="thumpUp"></Svg>
                            </button>
                            <button onClick={() => {
                                var x = (res._index - 1) + ""; let dic = {}; dic[x] = { l1: true, l2: false, l3: true, l4: false };
                                setLike({ ...like, ...dic })
                            }} className={(like[res._index - 1].l2) ? "w-25 btn btn-outline-white rounded-circle p-1 p-lg-3 border-white" : "d-none"}>
                                <Svg svg="thumpUpFill"></Svg>
                            </button>
                            <button onClick={() => {
                                var x = (res._index - 1) + ""; let dic = {}; dic[x] = { l1: true, l2: false, l3: false, l4: true };
                                setLike({ ...like, ...dic })
                            }} className={(like[res._index - 1].l3) ? "w-25 m-1 btn btn-outline-white rounded-circle p-1 p-lg-3 border-white" : "d-none"}>
                                <Svg svg="thumpDown"></Svg>
                            </button>
                            <button onClick={() => {
                                var x = (res._index - 1) + ""; let dic = {}; dic[x] = { l1: true, l2: false, l3: true, l4: false };
                                setLike({ ...like, ...dic })
                            }} className={(like[res._index - 1].l4) ? "w-25 m-1 btn btn-outline-white rounded-circle p-1 p-lg-3 border-white" : "d-none"}>
                                <Svg svg="thumpDownFill"></Svg>
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