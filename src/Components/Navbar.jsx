import React from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import {  NavLink } from "react-router-dom";
// import styles from "../Style/navbar.module.css";
import "../Style/navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
          <div className='logo'>
z
          </div>
        <div className='text-sm'>
        <button>
          <DehazeIcon style={{ color: "#EB5429" , paddingRight:'10px'}}/>
        </button>
        </div>
        {/* <div className='dehazeicon'></div> */}
        <div className='menus'>
          
        
        <NavLink to="/All Categories" className={({isActive})=>isActive && 'active'}>All Categories</NavLink>
          <NavLink to="/Manufactures"  className={({isActive})=>isActive && 'active'}>Manufactures</NavLink>
          <NavLink to="/About Us"  className={({isActive})=>isActive && 'active'}>About Us</NavLink>

<select style={{ color: "#EB5429" }}>
  <option value="1">For Bussiness</option>
  <option value="2">2</option>
  <option value="3">3s</option>
  <option value="4">4</option>
</select>
          <NavLink to="/FAQ" className={({isActive})=>isActive && 'active'}>FAQ</NavLink>
          <NavLink to="/Contact Us"  className={({isActive})=>isActive && 'active'}>Contact Us</NavLink>
            
            
        </div>
        
        </div>
        <div className='right'>
          <div className='singleline'></div>


          
          <div className='searchbox'>
            
          <button ><SearchIcon /></button>
        <input type='text' placeholder="Search.." ></input>
        </div>



        <div className='cart'>
          <button>
          <ShoppingCartOutlinedIcon style={{ color: "#EB5429" }}/>
          </button>
        </div>
        <div className='profile'><button> <PersonOutlineOutlinedIcon style={{ color: "#EB5429" }}/></button>
        <select style={{ color: "#EB5429" }}>
  <option value="1">Welcome muhammed navas</option>
  <option value="2">2</option>
  <option value="3">3s</option>
  <option value="4">4</option>
</select></div>
          </div>
          
      
    </div>
  )
}

export default Navbar
