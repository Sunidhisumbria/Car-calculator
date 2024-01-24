
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
// import './App.css';
import './Login.css';
import Home from './Home';




  function LoginPage() {
  const[userName , setuserName] = useState(0);
const[password , setPassword] = useState(0);



const Login = () => {};
// const Logout = () => {};

return(
 <div class="w-full ml-2 ">
  <div className='main' class="flex  w-full bg-sky-100">
<div className="containers" class=" ml-10 px-10 py-6" >
  {/* (isLoggedIn)? */}
 <div  >
    <div className='welcome'>
      <h2 class="text-3xl font-sans underline ml-5 mt-3 px-3 py-1">Welcome,{userName}</h2>
    </div>

  {/* <button   onClick = {Logout} className='button'>Logout</button> */}
<div>
<h2 className='hello' class="text-18 font-sans ml-10 mt-2 px-6 py-2">Login Page</h2>
</div>
<form>
  <div class=" static mr-5">
  <div className='maino' class=" ml-10 px-6 font-semibold text-22 font-sans mb-1">
  <label >Username:</label>
  </div>
  <div class="ml-9 px-9 w-full">
   <input class= "w-full bg-teal-50 border-gray-300" type ="text" value={userName} onChange={(e) => setuserName(e.target.value)}
   /> 
   </div>
   </div>
   
  <div class="relative mr-5">
   <div className='counter' class="ml-10 px-6 font-semibold text-24 dark: text-black-700 mb-1"  >
  <label> Password:</label>
  </div>
  <div  class=" ml-9 px-10 w-full">
    <input class=" w-full bg-teal-50 border-gray-300"   type ="password" value={password} onChange ={ (e)  => setPassword(e.target.value)}
/>
<span class= "absolute top-8 left-31 right-2  "><img src="https://www.shutterstock.com/image-vector/eye-vector-icon-260nw-1266339757.jpg" alt=""
      style={{width: "30px",height: "35px"}} /></span>
</div>
</div>


<div className='button_n'  class="ml-10 px-8 py-3 font-semibold text-24 dark: text-black-700 mb-2 mt-3 mr-5 px-9">
<Link to="/home"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full ml-5 px-6" onClick={Login }>Login</button></Link>
  </div>
</form>

</div>
</div>
<div className="alter" class="ml-10 px-10 flex justify-end ">
  <img  class="w-full "src="https://used-car-calculator-admin.vercel.app/assets/login_img-Xrfui6jX.png" style={{width: "80%", height:"100%" }}/> 
</div>
</div>
</div>
)}

export default LoginPage

