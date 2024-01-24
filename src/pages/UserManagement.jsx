import React from 'react'
import Layout from '../components/Layout';
import './usermanagement.css';
import { IoMdGrid } from "react-icons/io";
import {Link}  from "react-router-dom";
import ViewDetails from './ViewDetails';




const UserManagement = () => {
  return (
    <Layout>
      
        <div class="bg-white" >
          <div className='management'>
         <div className='grid'><IoMdGrid /></div>
         <div className='play'>User Management</div>
         </div>
        <table className='detail' >
 
  <tr className='bar'>
    <th>#</th>
    <th>Avatar</th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Email</th>
    <th>Phone no</th>
    <th>Actions</th>
  </tr>
  <tbody class="border-b">
  <tr className='side' class="border-b">
   
    <td>1</td>
    <td className='path'><img class="w-15 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2VCuRdPJ9-J6-QE-M0z8eWEk6oKrdim4Mk7-Ry5KqFNoSpybuMDamFxvZ49F-tt5P4g&usqp=CAU" alt=""/></td>
    <td>John </td>
    <td>Doe</td>
    <td>johndoe@gmail.com</td>
    <td>4567777</td>
    <td>
    <Link to ="/details"><button type="button" className="view" onClick={ViewDetails} >ViewDetails</button></Link>
    </td>
   
  </tr>
  
  <tr className='side' class="border-b">
    <td>2</td>
    <td className='path'><img class="w-15 px-1 rounded-full" src="https://cdn.imgbin.com/11/8/6/imgbin-web-development-computer-icons-avatar-business-user-profile-man-with-formal-suit-illustration-LcvM0Ye3VKmuKGS5C6bEatstm.jpg" alt=""/></td>
    <td>Mason </td>
    <td>Carpenter</td>
    <td>mcarpenter@gmail.com</td>
    <td>899967</td>
    <td>
    <Link to ="/details"><button type="button" className="view" onClick={ViewDetails} >ViewDetails</button></Link>
    </td>
  </tr>
  <tr className='side' class="border-b">
    <td>3</td>
    <td className='path'><img class="w-15 px-1 rounded-full" src="https://thumbnail.imgbin.com/25/20/18/imgbin-computer-icons-avatar-avatar-XxYn4dsYHL598gYPvtz9VaKwK_t.jpg" alt=""/></td>
    <td>Alex </td>
    <td>Mayor</td>
    <td>alexmayor23@gmail.com</td>
    <td>4526717</td>
    <td>
    <Link to ="/details"><button type="button" className="view" onClick={ViewDetails} >ViewDetails</button></Link>
    </td>
  </tr>
  <tr className='side'class="border-b">
    <td>4</td>
    <td className='path'><img  class="w-15 px-1 rounded-full"  src="https://cdn.imgbin.com/20/4/2/imgbin-computer-icons-avatar-woman-user-avatar-65yEVsb540JmY3KM1zHf5FVCN.jpg" alt=""/></td>
    <td>Willow </td>
    <td>Hunt</td>
    <td>hunt656@gmail.com</td>
    <td>4567000</td>
    <td>
    <Link to ="/details"><button type="button" className="view" onClick={ViewDetails}   >ViewDetails</button></Link>
    </td>
  </tr>
  </tbody>
         </table>
      

    </div>
    </Layout>
  )
}

export default UserManagement;
