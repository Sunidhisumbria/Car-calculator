import { IoIosLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineReport } from "react-icons/md";



export  const array = [{
    title:"Dashboard",
    icon: <FaHome  color="white"  />,
    path: "/home"
    
},
{
    title:"User Management",
    icon: <FaUsers  color="white"/>,
    path: "/test"
},

{
    title: "Cars Management",
    icon: <FaCar color="white" />,
    path: "/car"
},
{
    title: "Report Management",
    icon: <MdOutlineReport  color="white" />,
    path: "/Report"
}, 
{
    title: "Settings",
    icon: <IoIosSettings color="white" />,
    path: "/settings"
    
},
{
    title: "Logout",
    icon: <IoIosLogOut color="white"/>,
    path: "/"
    
}]
