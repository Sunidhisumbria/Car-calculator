import React from 'react';
import Modal from 'react-modal';
import { LiaStarSolid } from "react-icons/lia";


const customStyles = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "100%",
      width: "60%",
      marginBottom: "100px"
    },
  };

const CarAdd = ({modalIsOpen, closeModal}) => {
    return(
<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Car Details Modal"
        style={customStyles}
        
      >
        <div class="w-full max-w-90 ">
        <div >
      <h2 class="border-b-2 ">Add Car </h2>
      </div>
      <div class="border-b-2">
      <div class="w-full max-w-100">
  <form >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400" type="text" placeholder="Username">
    </input>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
      Upload Image
      </label>
      <input class="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400" type="file" placeholder="Username">
    </input>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
      Engine Type
      </label>
      <input class="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400" type="text" placeholder="Engine type">
    </input>
    </div>
    </form>
<div  >
<h5 class="block text-gray-700 text-sm font-bold mb-2">Rating</h5>
<div class="flex text-2xl mb-5">
    <div><LiaStarSolid /></div>
    <div><LiaStarSolid /></div>
    <div><LiaStarSolid /></div>
    <div><LiaStarSolid /></div>
    <div><LiaStarSolid /></div>
    
</div>
</div>
<div class="mt-5 py-4">
<div  class="block text-gray-700 text-sm font-bold  mt-4 mb-2">
    Maintenance Breakdown
</div>
<form class="flex gap-4"> 
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Basic
      </label>
      <div class="flex">
      <input class="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400" type="text" placeholder="Number"></input>
      <div class="ml-2 mt-2 block text-gray-700 text-sm font-bold">Miles</div>
      </div>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Costly
      </label>
      <div class="flex">
      <input class="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400" type="text" placeholder="Number">
    </input>
    <div class="ml-2 mt-2 block text-gray-700 text-sm font-bold">Miles</div>
    </div>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Not Recommended
      </label>
      <div class="flex">
      <input class="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400" type="text" placeholder="Number">
    </input>
    <div class="ml-2 mt-2 block text-gray-700 text-sm font-bold">Miles</div>
    </div>
    </div>
    </form>
    </div>
   
    </div>
    </div>
    </div>
    <div class="flex justify-end items-end">
    <form class="flex justify-center items-center">
        <button type="button" onClick={closeModal} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded flex justfy-center items-center">
         Submit
        </button>
      </form>
      </div>
      </Modal>
    )
};
export default CarAdd;