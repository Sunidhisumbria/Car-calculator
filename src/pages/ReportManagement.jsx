import React, { useState } from 'react'
import Layout from '../components/Layout';
import { IoMdGrid } from "react-icons/io";
import Reply from '../components/Reply';





const ReportManagement = () => {
   
        const [modalIsOpen, setModalIsOpen] = useState(false);
       
         const openModal = () => {
           setModalIsOpen(true);
         };
       
         const closeModal = () => {
           setModalIsOpen(false);
         };
   
   
   
   
   
    return(
       <Layout>
            <div class="w-full">
        <div class="flex bg-red">
    <div class='mr-1 ml-5 mt-5 '><IoMdGrid class="text-2xl text-blue-400" /></div>
    <div class='mr-1 ml-1 mt-5 text-22  font-semibold '>Report Management</div>
        </div>

<div>
<table class="w-full text-left  text-black-500 mt-11 ml-10 py-9" >
    <thead class="txt-xs text-black-700 uppercase bg-white-50 dark:text-black-400 ">
    <tr>
        <th scope='column' class="px-5 py-3" >#</th>
        <th scope='column' class="px-5 py-3" >Name</th>
        <th scope='column' class="px-5 py-3" >Subject</th>
        <th scope='column' class="px-5  py-3" >Email</th>
        <th scope='column' class="px-5 py-3" >Description</th>
        <th scope='column' class="px-5 py-3" >Actions</th>
        
    </tr>
    </thead>
    
    <tr class="bg-white border-b dark:bg-gray-800 dark: border-gray-700"  >
        <td class="px-6 py-4">1</td>
        <td  class="px-6 py-4">john doe</td>
        <td  class="px-6 py-4">Feedback</td>
        <td  class="px-6 py-4">doe@email.com</td>
        <td  class="px-6 py-4">abbdcdc</td>
        <td  class="px-6 py-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={openModal}>Reply</button>
        </td>
    </tr>
    
    <tr class="bg-white border-b dark:bg-gray-800 dark: border-gray-700"  >
        <td class="px-6 py-4">2</td>
        <td  class="px-6 py-4">jane doe</td>
        <td  class="px-6 py-4">Feedback given</td>
        <td  class="px-6 py-4">jane@email.com</td>
        <td  class="px-6 py-4">abbdcdc</td>
        <td  class="px-6 py-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Reply</button>
        </td>
    </tr>
    <tr class="bg-white border-b dark:bg-gray-800 dark: border-gray-700"  >
        <td class="px-6 py-4">3</td>
        <td class="px-6 py-4">Mark</td>
        <td class="px-6 py-4">Feedback given a</td>
        <td class="px-6 py-4">marke@email.com</td>
        <td class="px-6 py-4">abbdcdc</td>
        <td class="px-6 py-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Reply</button>
        </td>
    </tr>
    <tr class="bg-white border-b dark:bg-gray-800 dark: border-gray-700"  >
        <td class="px-6 py-4">4</td>
        <td class="px-6 py-4">Harry</td>
        <td class="px-6 py-4">Feedback given b</td>
        <td class="px-6 py-4">Harry@email.com</td>
        <td class="px-6 py-4">abbdcdc</td>
        <td class="px-6 py-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >Reply</button>
        </td>
    </tr>
    
    
</table>
</div>
             </div>


   <Reply modalIsOpen={modalIsOpen} closeModal={closeModal}/>

        </Layout>

      
    )
}
export default ReportManagement;