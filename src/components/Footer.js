import React from 'react'

export default function Footer() {
    return (
        <div className="w-100 bg-dark footer p-1 p-md-4 text-white">
            <div className='d-flex justify-content-between align-items-center row'>
                <div className='col-12 col-lg-6'>
                    <h5 className="text-white">Top companies choose Udeymy Business to build in-demand career skills.</h5>
                </div>
                <div className="col-6 col-lg-4 d-flex text-white justify-content-between">
                    <h6 className="m-2">Nasdaq</h6>
                    <h6 className="m-2" >box</h6>
                    <h6 className="m-2">NetApp</h6>
                    <h6 className="m-2">eventbrite</h6>
                </div>
            </div>
            <hr className='w-100 text-white'></hr>
            <div className="d-flex">
                <div className='text-white col-3 col-md-2'>
                    <h6 className='small'>Udemy Business</h6>
                    <h6 className='small'>Teach on Udemy</h6>
                    <h6 className='small'>Get the app</h6>
                    <h6 className='small'>About us</h6>
                    <h6 className='small'>Contact Us</h6>
                </div>
                <div className='text-white col-3 col-md-2'>
                    <h6 className='small'>Careers</h6>
                    <h6 className='small'>Blog</h6>
                    <h6 className='small'>Help and Support</h6>
                    <h6 className='small'>Amiliate</h6>
                    <h6 className='small'>Inventors</h6>
                </div>
                <div className='text-white col-3 col-md-2'>
                    <h6 className='small'>Terms</h6>
                    <h6 className='small'>Privacy policy</h6>
                    <h6 className='small'>Cookie settings</h6>
                    <h6 className='small'>Sitemap</h6>
                    <h6 className='small'>Accessibility statement</h6>
                </div>
                <div className='col-3 col-md-6  text-end pe-1 pe-md-4'>
                    <button className='btn btn-outline-light text-white rounded-0 p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe me-1" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                        </svg>
                        English
                    </button>
                </div>
            </div>
            <div className="mb-5 d-flex justify-content-between mt-5">
                <div>
                <img src='../images/logo.png' alt="Udemy logo"></img>
                </div>
                <div>
                    <h6 className='small text-white-50'>@copyright Abdelrahman Fekri</h6>
                </div>
            </div>
        </div>
    )
}