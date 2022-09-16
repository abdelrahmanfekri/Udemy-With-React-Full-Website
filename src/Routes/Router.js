import React from 'react'
import Home from '../Pages/Home';
import Error from '../Components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from '../Pages/Details';
import { useState, useEffect } from 'react';
export default function Router({context}) {
    const [allData, setAllData] = useState({ data: null, isLoading: true, error: "" });
    useEffect(() => {
        let url = "http://localhost:3003/data";
        //let url = "https://api.npoint.io/1283cd2858261a474407/data";
        fetch(url)
            .then((data) => data.json()).then((json) => { setAllData({ data: json, isLoading: false,error:null }); })
            .catch(() => { setAllData({ data:null,error: "sorry some thing is wrong please chick your internet connection", isLoading: false }); });
    }, [])
    return (
        <context.Provider value={allData}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/courses/:path" element={<Home />}></Route>
                    <Route path="/details/:id" element={<Details />}></Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </context.Provider>
    )
}
