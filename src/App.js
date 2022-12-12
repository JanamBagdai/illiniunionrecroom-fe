import Navbar from "./Components/Navbar";
import AdminLogin from "./Components/AdminLogin";
import "./App.css"
import SvgComponent from "./Components/EightBallSVG";
import BowlingBallSVG from "./Components/BowlingBallSVG";
import RegisterationPage from "./Components/RegistrationPage";
import ListView from './Components/List';
import { BrowserRouter as Router,Switch, Routes,Route } from 'react-router-dom';
import Prices from "./Components/Prices";
import AdminChoose from "./Components/AdminChoose";

function App() {
  return (
    <Router>
     <Navbar />
     {/* <div className="rec"></div> */}
      <SvgComponent className="rec1"/>  
      <BowlingBallSVG className="rec"/> 
      <Routes>
        <Route path='/List' element={<ListView/>} />
        <Route path='/Register' element={<RegisterationPage/>} />
        <Route path='/Prices' element={<Prices/>} />
        <Route path='/Admin' element={<AdminLogin/>} />
        <Route path='/AdminChoose' element={<AdminChoose/>} />
       </Routes>
     </Router>
  );
}
  {/* <AdminLogin /> */}

export default App;
