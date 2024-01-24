import React  from 'react';
import Modal from 'react-modal';



const customStyles = {
    content: {
      top: '30%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "47%",
      width: "35%",
      
    },
  };

const Delete = ({modalClick, closeModal}) => {
    const handleItem = () =>  closeModal();
    
    return(
<Modal
        isOpen={modalClick}
        onRequestClose={closeModal}
        contentLabel="Add Car Details Modal"
        style={customStyles}
        
      >
        <div>
            <div class="flex justify-center items-center bg-red">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI5bPqvlocEBLYCMFkguA3Cc_1mp5uLZdXnYqtmKYPC3V0AxwQ7blQGOKBA_yQObsOxk&usqp=CAU" alt="" class="w-20 h-20 bg-red"/>
            </div>
            <div class="py-5 " >
            <h2 class="flex justify-center text-3xl font-sans "  >Are  you sure ?</h2>
            
            <h6 class="flex justify-center text-semibold font-sans mt-1">You won't be able to revert this!</h6>
        </div>
        <div class="flex justify-center gap-4 mt-5">
      <button onClick={handleItem}  class="bg-gray-500 hover:bg-gray-600 text-white-700 font-semibold text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">Yes,Delete It</button>
      <button onClick={handleItem} class= "bg-red-400 hover:bg-red-500  font-semibold text-white py-2 px-4 border  hover:border-transparent rounded">Cancel</button>
      </div>
      </div>
      </Modal>
    )}
    export default Delete