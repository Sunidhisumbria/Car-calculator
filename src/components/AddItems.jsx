
import React from 'react';
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const AddItems = ({ modalIsOpen, closeModal,modalType }) => {

     return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Car Details Modal"
        style={customStyles}
        
      >
        
      

    <div>
        <div >
      <h2 class="border-b-2">{modalType} </h2>
      </div>
      <div>
      <div class="w-full max-w-xs">
  <form >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400" type="text" placeholder="Username">
    </input>
    </div>
    
    </form>
   
        </div>
        <div class="w-full max-w-xs">
  <form >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Upload
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"  type="file" placeholder="Username">
    </input>
    </div>
    </form>

      <form class="flex justify-center items-center">
        <button type="button" onClick={closeModal} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded flex justfy-center items-center">
         Submit
        </button>
      </form>
    </div>
    </div>
    </div>
    </Modal>
  );
};

export default AddItems;
