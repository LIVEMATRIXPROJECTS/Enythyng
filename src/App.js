import React, { useEffect } from "react";
import './App.css';
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllPostApi } from "./components/redux/PostApi";

import Navbar from './components/Navbar-Section/Navbar';
import People from "./components/People-Section/People";
import Ads from "./components/Ads-Section/Ads";
import Myprofile from "./user-profile-components/Myprofile-Section/Myprofile";
import AdsProfile from "./user-profile-components/Ads-profile-section/AdsProfile";
import Settings from "./user-profile-components/Settings";

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
      getAllPostApi(dispatch);
    }, [dispatch]);
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/People" element={<People />} />
           <Route path="/ads" element={<Ads />} />
           <Route path="/MyProfile" element={<Myprofile/>} />
           <Route path="/AdsSection" element={ <AdsProfile/>} />
           <Route path="/Settings" element={ <Settings/>} />

       
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
