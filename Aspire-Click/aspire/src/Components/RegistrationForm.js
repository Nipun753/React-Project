import React, { useState } from 'react'
import '../Css/registration.css'
import { Button } from 'react-bootstrap';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function RegistrationForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = () => {
        axios.post('http://localhost:3001/api/users/store', {
            "Name": name,
            "Email": email,
            "Password": password
        }).then((res) => alert(res.data))
    }
    return (
        <motion.div initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}>
            <form className='loginform'>
                <h5>Name</h5>
                <div className='emailNAME'>
                    <i class="fa-solid fa-signature"></i><input className='logininput' type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <h5>Email</h5>
                <div className='email'>
                    <i class="fa-solid fa-envelope-open"></i><input className='logininput' type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <h5>Password</h5>
                <div className='email'>
                    <i class="fa-solid fa-lock"></i> <input className='logininput' type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
                </div>

                <p><input type="checkbox" className='checkbox' /> By click this you agree to the Term and condition of the company</p>
                <Button onClick={handleRegister} className='loginbtn'><i className="fa-solid fa-user-plus mx-2"></i>Sign Up</Button>
            </form >
            <p style={{ marginLeft: "70px", }} className="my-4">Already Have a Account?  <Link to="/login"> Login</Link></p>


        </motion.div >
    )
}
