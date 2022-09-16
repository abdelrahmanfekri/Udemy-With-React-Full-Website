import React, { createContext } from 'react'

import Footer from './Components/Footer';
import Router from './Routes/Router';
export const context = createContext();
export default function App() {
    return (<>
        <Router context={context}></Router>
        <Footer></Footer>
        </>
    )
}
