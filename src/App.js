import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import './App.css';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home'
import UserManagement from './pages/UserManagement';
import CarManagement from './pages/CarManagement';
import ReportManagement from './pages/ReportManagement'
import Settings from './pages/Settings'
import ViewDetails from './pages/ViewDetails';
import ViewCar from './pages/ViewCar';
import TestModal from './components/TestModal';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <div className= "App">
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/home"   element={<Home/>} />
      <Route path="/test"   element={<UserManagement/>} />
      <Route path="/car"   element={<CarManagement/>} />
      <Route path="/Report"   element={<ReportManagement/>} />
      <Route path="/settings"   element={<Settings/>} />
      <Route path="/details" element={<ViewDetails/>} />
      <Route path="/viewcars" element={<ViewCar/>}></Route>


      </Routes>
    </Router>
    </div>
  )

  
}

export default App;


