import React, { createContext } from 'react'
import Home from './components/Home';
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Details from './components/Details';
export const context = createContext();
export default function App() {
    const [allData, setAllData] = useState({ data: null, isLoading: true, error: "" });
    useEffect(() => {
        let url = "http://localhost:3000/data";
        //let url = "https://api.npoint.io/1283cd2858261a474407/data";
        fetch(url)
            .then((data) => data.json()).then((json) => { setAllData({ data: json, isLoading: false,error:null }); })
            .catch(() => { setAllData({ data:null,error: "sorry some thing is wrong please chick your internet connection", isLoading: false }); });
    }, [])
    return (<context.Provider value={allData}>
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
