import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { Dropdown } from "react-bootstrap";
import { Dropdown } from 'flowbite-react';
import { useState } from "react";
import './Navbar.css'

const Navbar = () => {
    const [menu,setMenu]=useState('')
  return (
    <div className="navbar-section">
      <div className="navSection">

        <div className="title">
          <img src={logo} alt="img" />
          <h2>ENYTHYNG.com</h2>
        </div>
       
        <ul className="submenu">
        <Link to="/People" className="custom-link" onClick={()=>{setMenu('people')}}>
        <li>People {menu ==="people" ? <hr/>:''}</li>
          </Link>

          <Link to="/business" className="custom-link" onClick={()=>{setMenu('business')}}>
        <li>Business {menu ==="business" ? <hr/>:''}</li>
          </Link>
          <Link to="/ads" className="custom-link" onClick={()=>{setMenu('ads')}}>
        <li>Ads {menu ==="ads" ? <hr/>:''}</li>
          </Link>
         
          {/* <Link to="/news" className="custom-link" onClick={()=>{setMenu('Shopping')}}>
        <li>Shopping {menu ==="Shopping" ? <hr/>:''}</li>
          </Link> */}
          {/* <Link to="/media" className="custom-link" onClick={()=>{setMenu('media')}}>
          <li>Media {menu ==="media" ? <hr/>:''}</li>
          </Link> */}
         
         
          
        </ul>

        <div className="user-drowndrop-container">

          {/* <Stack spacing={2} direction="row">
          <Link to='/login'>
            
            <Button variant="outlined">User</Button>
          </Link>
          </Stack> */}
           <Dropdown label="Profile" className="user-drowndrop" style={{ color: "black", fontSize:'14px', fontWeight:"bolder",borderRadius:"8px", height:"40px",border:'none'}}>
      <Dropdown.Header>
        <span className="block text-sm"> Hello srinivas</span>
        
      </Dropdown.Header >
      {/* <Dropdown.Item  className="user">My Profile</Dropdown.Item>
      <Dropdown.Item  className="user">ADS-Section</Dropdown.Item>
      <Dropdown.Item  className="user">My ADS</Dropdown.Item>
      <Dropdown.Item  className="user">Settings</Dropdown.Item> */}
      <Link to="/MyProfile" className="custom-link-user" onClick={()=>{setMenu('myprofile')}}>
        <p>My Profile {menu ==="myprofile" ? <hr/>:''}</p>
          </Link>
          <Link to="/AdsSection" className="custom-link-user" onClick={()=>{setMenu('adsSection')}}>
        <p>ADS-Section {menu ==="adsSection" ? <hr/>:''}</p>
          </Link>
          <Link to="/Settings" className="custom-link-user" onClick={()=>{setMenu('settings')}}>
        <p>Settings {menu ==="settings" ? <hr/>:''}</p>
          </Link>
          <p>Legal</p>

      <Dropdown.Divider />
      <p  className="user">Sign out</p>
    </Dropdown>
        </div> 
       

      </div>
    </div>
  )
}

export default Navbar