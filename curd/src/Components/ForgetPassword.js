import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function ForgetPassword() {
    const [dbEmail ,setDbEmail]= useState([])

    const [email, setEmail] = useState('');

    useEffect(() => {
      const url="http://localhost:3001/api/users";
      axios.get(url).then((res)=>{
  
        console.log(res.data)
        setDbEmail(res.data)
        
      })
    
    },[] )
  
  
    const handleEmail = (e) => {
        setEmail(e.target.value);   
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        dbEmail.map((sin,idx)=>{
         
         if(sin.email ===email){
        alert( sin.password )     
         }     
         else{
           console.log("Email Does not Exit")
         }
         })
      };
  return (
  <>
  <div className='Registration'>
       
       <h1>Forget Password</h1>
       
       <form>
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        <p>New User? <Link to='/registration'>Sign Up</Link></p>
        
      </form>
     

      
    </div>
    <Footer/>
  </>
  )
}
