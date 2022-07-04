import axios from 'axios';
import React , {useContext, useEffect, useState} from 'react'
import { Link, Navigate } from 'react-router-dom';
import {loginContext ,setisLogedInContext,setUserData} from '../App';
import {useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Footer from './Footer';





export default function Login() {
  const navigate = useNavigate();
  //context
  const login =useContext(loginContext)
  const userData=useContext(setUserData)
  const isLogin=useContext(setisLogedInContext)
  //db Emails
  const [dbEmail ,setDbEmail]= useState([])

  useEffect(() => {
    const url="http://localhost:3001/api/users";
    axios.get(url).then((res)=>{

      console.log(res.data[0].email)
      setDbEmail(res.data)
     
    })
  
  },[] )

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

    const handleEmail = (e) => {
        setEmail(e.target.value);   
      };
     

      const handlePassword = (e) => {
      setPassword(e.target.value)  
      };
     
      const handleSubmit = (e) => {
        
        e.preventDefault();
        dbEmail.map((sin,idx)=>{       
         if(sin.email !==email){
          console.log( "Email Does Not Exist")      
         } 
         else if(sin.email ===email && sin.password===password){
          userData({
            'id':sin._id,
          'name':sin.name,
          'email':sin.email,
          'password':sin.password
          })
         isLogin(true)
         navigate('/')
        console.log(setUserData)
         }  
           
         }) 
      };
  return (
  <>
    <div className='Registration'>
       
       <h1>Login</h1>
       
       <form>
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>

        
      </form>
      
      <p>New User? <Link to='/registration'>Sign Up</Link></p>

      <p><Link to="/forgetpassword">  Forget Password ? </Link></p>

      
    </div>
    <Footer/>
    </>
  )
}

