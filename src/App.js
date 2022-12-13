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
import axios from "axios";

function App() {
     const [allowReg, setAllowReg] = useState(true);

    useEffect(()=>{
        axios.get(`https://illinirecroom.herokuapp.com/get-switch-website-details`)
            .then((res)=>{
               setAllowReg(res.data)
                console.log("hello")
                console.log(res.data)
            });
    },[]);

    if(allowReg){
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
    }else{
        return(
            <div class="season three">
            <p class="par text__three"> Sorry RecRoom is closed right now! Please check later </p>
            </div>
        );
    }
}

export default App;
