import React from 'react'
import Layout from '../components/Layout'
import { IoMdGrid } from "react-icons/io";

const ViewDetails = () => {
    return(
        <Layout>
 <div>
 <div class="flex ">
    <div class='mr-1 ml-5 mt-5 '><IoMdGrid class="text-2xl" /></div>
    <div class='mr-1 ml-1 mt-5 text-22  font-semibold  '>User Management</div>
        </div>
        <div class="flex ml-10 mt-4 px-5 py-6  ">
           
            <div class="flex bg-slate-100" >
                <img  src="https://i.pinimg.com/originals/e4/44/bb/e444bb413a04cd6db84dff3cf60b0d3e.png" alt="" />
                </div>
                
            <div class="ml-5 w-full bg-slate-100">
                <div class="flex items-center justify-between pb-2">
                <h5 class="mb-5  text-22  font-semibold mr-4 mt-6 ml-5 " >User Detail</h5>
                </div>
                <div >
                <ul class="font-sans px-2 ml-8 mb-7 mr-8 divide-y divide-white-200 border-solid border-2 border-gray-200 divide-y divide-black-200" >
                    <li class="flex justify-between items-center py-4"> Name
                        <span class="font-semibold ml-4">Mr John Doe</span></li>
 <li class=" flex justify-between items-center py-4">Email Id <span class="font-semibold ">johndoe@gmail.com</span></li>
 <li class="flex justify-between items-center  py-4">Gender<span class="font-semibold">Male</span></li>
 <li class="flex justify-between items-center  py-4">Phone Number <span class="font-semibold">4567777</span></li>
 <li class="flex justify-between items-center   py-4">Address<span class="font-semibold" >SAS Ngar, Mohali, Mohali, Punjab, 160074</span></li>
                </ul>
                </div>
            </div>
        </div>
 </div>
        </Layout>
    )
}

export default ViewDetails;