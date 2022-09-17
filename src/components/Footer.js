import React from 'react';
import Svg from './Svg';
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
                        <Svg svg="globe2"></Svg>
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