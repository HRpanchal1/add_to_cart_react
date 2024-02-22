// import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
// import Home from './Home'
import Home from './Componnents/Frontend/Home'
import Cart from './Componnents/Frontend/Cart'
// import data from './Componnents/Backend/Data'
// import Navbar from './Componnents/Frontend/Nabar'


const Mainrouter = createBrowserRouter([
    {
        path : "/",
        element :<><Home/></>
    },
    
])
export default Mainrouter