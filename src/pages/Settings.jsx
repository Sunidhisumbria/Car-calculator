import React from 'react';
import Layout from '../components/Layout';
import { IoMdGrid } from "react-icons/io";


 const Settings = () => {
    return(

<Layout>
<div style={{width:"100%"}}>
<div style={{width:"100%"}}>
<div class="flex ">
    <div class='mr-1 ml-5 mt-5 '><IoMdGrid class="text-2xl text-blue-400" /></div>
    <div class='mr-1 ml-1 mt-5 text-22  font-semibold  '>Settings</div>
        </div>
</div>


<div class="flex ml-10 gap-9 ">
   
       
           <div class=" w-full h-full max-w-xs mt-4 ml-10">
           <div class=" border-b mt-4  px-9 text-22   font-sans font-bold ml-10" >
<h2 class="subpixel-antialiased text-xl font-sans mt-4"> Change password</h2> 
</div>
  <form class="bg-white border-gray-700 shadow-md rounded px-8 pt-6 pb-8 ml-10 w-full">
    <div class="relative">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Old Password
      </label>
      <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password"></input>
    
     <span class= "absolute top-8 left-31 right-1"><img src="https://www.shutterstock.com/image-vector/eye-vector-icon-260nw-1266339757.jpg" alt=""
      style={{width: "30px",height: "30px"}} /></span>
      </div>
      <div class="relative">
    <label class="block text-gray-700 text-sm font-bold mb-2" >
      New Password
      </label>
      <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password"></input>
     <span class= "absolute top-8 left-31 right-1 "><img src="https://www.shutterstock.com/image-vector/eye-vector-icon-260nw-1266339757.jpg" alt=""
      style={{width: "30px",height: "30px"}} /></span>
    </div>

    <div class="relative">
    <label class="block text-gray-700 text-sm font-bold mb-2" >
        Confirm Password
      </label>
      <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password"></input>
     <span class= "absolute top-8 left-31 right-1"><img src="https://www.shutterstock.com/image-vector/eye-vector-icon-260nw-1266339757.jpg"alt=""
      style={{width: "30px",height: "30px"}} /></span>
    </div>
   
     <div class="mt-3 mb-1 flex justify-center px-10 py-1 mb-4 w-full">
        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  w-full px-8 mt-5 border border-blue-700 rounded w-45 ">Submit</button>
    </div>
    </form>
      </div>
   <div  class="w-full h-full max-w-xs mt-4"  >
    <div class="bg-white shadow-md rounded px-8   pt-6 pb-8 mb-4 mt-2 h-full ">
    <div class="w-full px-8 " >
        <h2 class="subpixel-antialiased text-xl font-sans   border-b flex justify-center">Upload picture</h2>
        <div class="mt-11 flex justify-center " ><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" style={{width: "200px",height: "200px"}}/></div>
    </div>
    <div class="mt-5 flex justify-center ">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-1 border border-blue-700 rounded w-45">Upload</button>
    </div>
    </div>
    </div>
    </div>
 
    </div>



</Layout>
   
   
   )
}

export default Settings;