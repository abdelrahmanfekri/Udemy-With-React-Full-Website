import React from 'react'

export default function Side({ course }) {
    return (
        <div style={{ width: "23%", left: "72%", top: "40px", height: "100%" }} className="position-absolute d-none d-lg-block">
            <img className="w-100" alt="course" src={course[0].image_750x422}></img>
            <div className='sticky-top bg-white shadow p-2' style={{ top: "20px" }}>
                <h6 className='text-center text-white bg-dark' style={{ height: "30px" }}>preview this course</h6>
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
