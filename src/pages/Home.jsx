import React from "react";
import "./Home.css";
import Layout from "../components/Layout";
import { totalData } from '../constant/total';
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { IoMdGrid } from "react-icons/io";

function Home() {
  const pathname   = useLocation()
  console.log(pathname
    ,"location")
  return (
  
    <Layout>
  
        <div className="children">
        
        <div className='management'>
         <div className='grid'><IoMdGrid /></div>
         <div className='play'>Dashboard</div>
         </div>
            <div className="post">
           { totalData.map((index)  => (
            
            <ul className="num">
            <li className="data">
              <div className="index">{index.content}</div>
              <div className="ico" >{index.icon}</div>
              <div className="number">{index.number}</div>
              </li> 
              </ul>
            
              ))
           }
           </div>

            </div>
       
       
         
          
       
        </Layout>
  
  );
}

export default Home;
