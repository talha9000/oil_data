import React from 'react';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = ({ButtonEvent}) => {
 
  return (
    <div style={{ position: 'fixed ', top: 0, left: 0, right: 0, zIndex: 100 }} className="navbar bg-base-300 cnt">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={ButtonEvent}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <NavLink to={'/dashboard'} className="btn btn-ghost text-xl">OilTrack Innovations</NavLink>
    
      </div>
      <div className="flex-none">
 
{/* Add profie pic */}

<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>


      </div>
    </div>
  );
};

export default Navbar;
