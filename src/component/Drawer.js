import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../container/route';

const names=[
'About Boilerplate',
'Documentation',
"About Talha",
'Redux Counter',
'Show Redux Counter'
]
const Drawer = ({ toggleDrawer }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(toggleDrawer);
  }, [toggleDrawer]);

  return (
    <>
      <div className={`drawer ${isOpen ? 'active' : ''}`} style={{ zIndex: 101 }}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <div className="drawer-content">
          {/* Page content here */}
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="pointer-events-none">
              <li>
                <img src="../logo/logo.jpeg" alt="" />
                <h1 className="text-3xl font-bold mt-2 mb-5">OilTrack Innovations</h1>
              </li>
            </div>
            <li><NavLink to={'/dashboard'}>Home</NavLink></li>
                
            {routes.map((route, index) => (
              // you can use routes.name for defaut naem fetch form file
             // <li key={index}><NavLink to={route.path}>{route.name}</NavLink></li>
              <li key={index}><NavLink to={route.path}>{names[index]}</NavLink></li>
            ))}
            
            {/* Footer */}
            <li className='mt-auto pt-4 border-t border-base-300'>
              <footer className=" pointer-events-none text-center">by iotnoob Talha Khalid</footer>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Drawer;
