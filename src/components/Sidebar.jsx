import React from 'react'
import "../pages/Home.css"
import { useLocation } from 'react-router-dom';
import {array}  from '../constant/data';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar ">
      <ul className='list'>
        {array.map((item) => (
          <li className='sideNav'>
            <Link to={item.path}>
              <div  className={item.path === pathname ? "flex justify-between gap-2 hover:bg-white sidebar_clr border border-indigo-300 rounded" :"flex justify-between gap-2"} >
                <div className='icon' class="mt-2 ml-2 py-2 flex justify-center "><span>{item.icon}</span></div>
                <div className='title' class=" py-2 flex justify-center subpixel-antialiased "><h4 className="text-white font-sans font-normal font-2xl">{item.title}</h4></div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar
