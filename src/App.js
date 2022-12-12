import Navbar from "./Components/Navbar";
import "./App.css"
import SvgComponent from "./Components/EightBallSVG";
import BowlingBallSVG from "./Components/BowlingBallSVG";
import RegisterationPage from "./Components/RegistrationPage";
import ListView from './Components/List';
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import Prices from "./Components/Prices";
import AdminPage from "./Components/AdminPage";
import React, { useEffect, useState } from "react";

function App() {
    // const [showNav, setShowNav] = useState(true);

    return (
        <Router>
           {/* {showNav ? <Navbar/>: <></>}  */}
            <Navbar/>
            {/* <div className="rec"></div> */}
            <SvgComponent className="rec1"/>
            <BowlingBallSVG className="rec"/>
            <Routes>
                <Route path='/List' element={<ListView/>}/>
                <Route path='/' element={<RegisterationPage/>}/>
                <Route path='/Prices' element={<Prices/>}/>
                {/*<Route path='/Admin' element={<AdminLogin/>} />*/}
                {/*  <Route path='/AdminChoose' element={<AdminChoose/>} />*/}
                <Route path='/AdminPage' element={<AdminPage/>}/>
                    
            </Routes>
        </Router>
    );
}

export default App;
