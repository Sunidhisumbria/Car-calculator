import React, {useState} from 'react';
import Layout from '../components/Layout';
import { IoMdGrid } from "react-icons/io";
import CarAdd from '../components/CarAdd';




const ViewCar = () => {
   const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
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
         <button className='btn_n' onClick={openModal} > + Add Items</button>
         </div>
        
         </div> 
                </div>
                <table className='detail' >
 
 <tr className='bar'>
   <th>#</th>
   <th>Car Image</th>
   <th>Car Model</th>
   <th>Engine</th>
   <th>Rating</th>
   <th>Actions</th>
 </tr>
 <tbody class="border-b">
 <tr className='side' class="border-b">
  
   <td>1</td>
   <td className='path'><img src="https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2219529d1634299319-mahindra-xuv700-review-3d81b05f08a24efbac50b721a82ce327.jpeg" alt=""/></td>
   <td class="flex justify-center mt-7 mr-9">XUV700 </td>
   <td>1999 cc - 2198 cc</td>
   
   <td><div class="flex ">    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-ud1L4qBfjLmwGHsudG7G_Sd5FYXHACdH1aJaaiSrw&s" alt="" class="w-5 "/>
   <span class="ml-2">4.5</span></div>
</td>
   <td>
   <button type="button" className="view"  >ViewDetails</button>
   </td>
  
 </tr>
 
 <tr className='side' class="border-b">
   <td>2</td>
   <td className='path'><img src="https://s1.cdn.autoevolution.com/images/models/Mercedes-AMG_E53-AMG-Cabriolet-2020_main.jpg" alt="" class="w-15 border-2"/></td>
   <td>Mercedes-Benz E53 amg </td>
   <td class="flex jusstify-center mt-8 ml-9">2999 cc</td>
   
   <td><div class="flex ">    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-ud1L4qBfjLmwGHsudG7G_Sd5FYXHACdH1aJaaiSrw&s" alt="" class="w-5 "/>
   <span class="ml-2">5</span></div>
</td>
   <td>
   <button type="button" className="view"  >ViewDetails</button>
   </td>
 </tr>
 
 </tbody>
        </table>
     

   </div>
          <CarAdd modalIsOpen={modalIsOpen} closeModal={closeModal} />      

    </Layout>
)};


export default ViewCar