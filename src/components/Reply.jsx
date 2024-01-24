import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "35%",
      height: "60%"
    },
  };


const Reply = ({modalIsOpen,closeModal}) => {

    return(
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Car Details Modal"
        style={customStyles}
        
      >
        <div class="border-b"> 
        <div >
      <h2 class="border-b-2 subpixel-antialiased">Reply</h2>
      </div>
      <form>
        <label class="text-gray-500 font-sans font-semibold mb-4 subpixel-antialiased">Write your reply</label>
        <textarea rows="4" cols="53" class=" rounded-md mb-6 px-2 py-2 font-sans border border-gray-500 "></textarea>
      </form>
        </div>
        <div class="flex justify-end items-end gap-3 mt-5">
        <button onClick={closeModal} class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 border border-gray-700 rounded"> Close </button>
        <button onClick={closeModal} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Submit </button>
        </div>
        </Modal>
    )

}
export default Reply;