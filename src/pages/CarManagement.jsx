import React,{useState} from 'react';
import Layout from '../components/Layout';
import './carmanagement.css';
import { IoMdGrid } from "react-icons/io";
import {Link} from "react-router-dom";
import AddItems from '../components/AddItems';
import Delete from '../components/Delete'




const CarManagement =  () => { 
 
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalClick, setModalClick]   = useState(false);
   const [modalType,setModalType]  = useState("")
  
    const openModal = (type) => {
      setModalIsOpen(true);
      setModalType(type);
    };
    const clickModal = () => {
     setModalClick(true);
    };
  console.log(modalType,"modalType")
    const closeModal = () => {
      setModalIsOpen(false);
      setModalClick(false);
    };

      

    return(
        <Layout>
            <div className='property'>
                <div className='port'>
                   <div  className='manage'>
         <div className='new'>
            <div className='io'><IoMdGrid />
            </div>
            <div className='car'>Car Management</div>
            </div>
         <div className='played'></div>
         <div className='note'>
        <button className='btn_n'onClick={()=>openModal("Add Car")} >
          + Add Items
        </button>
        

      </div>
         </div> 
                </div>
                <div>
 <div >
 <table className='newtable' class=" ml-4 bg-white border-gray-300 shadow-lg rounded" style={{backgroundColor:"",width:"100%"}}>
    <thead class="mr-7">
            <tr className='newrow' class="px-6  mt-4">
                <th class="mr-8  px-6 py-3  ">#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Action</th>
                
            </tr>
            </thead >
            <tbody class=" ml-6 subpixel-antialiased font-sans">
            <tr className='newrow_o' >
        
               
                <td class=" ml-9 px-5" className='ka' >1</td>
                
                <div class="flex justify-center items-center mr-2 border-b-0">
                <td class="mt" >Mahindra</td>
                </div>
                <td className='source'  ><img src="https://www.carlogos.org/car-logos/mahindra-logo.png" class=" ml-10 " style={{width:"100px"}} alt=""/></td>
                <td  class="ml-8 px-7 py-4" >
                <div className="btn_e" style={{backgroundColor:"",width:"100%"}}>
                    <button className='btn' onClick={clickModal}>Delete</button>
                    <button className='btn_o' onClick={() => openModal("Edit")}>Edit</button>
                    <Link to="/viewcars"><button className='btn_w'>View Cars</button></Link>
                    </div>
                    </td>
                    
            </tr>
            </tbody>
           
         </table>
 </div>
            </div>
       
       
            </div>
           

       <div style={{display:"flex",justifyContent:"center", alignItems:"center",backgroundColor:"red"}}>
       

       </div>
       <AddItems modalIsOpen={modalIsOpen} closeModal={closeModal} modalType={modalType}/>
       <Delete modalClick={modalClick} closeModal={closeModal} />
        </Layout>
        
    )
}
export default CarManagement;