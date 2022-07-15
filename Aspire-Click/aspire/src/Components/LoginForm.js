import React, { useContext, useState } from 'react'
import '../Css/login.css'
import { Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { setLogin } from '../App'
import { motion } from 'framer-motion'

export default function LoginForm() {
  const setisLogin = useContext(setLogin)
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [resData, setResData] = useState("")
  const [smShow, setSmShow] = useState(false);

  const handleLogin = () => {
    axios.post('http://localhost:3001/api/users/login', {
      "Email": email,
      "Password": password
    }).then((res) => {
      if (res.data === "User Exist") {
        setisLogin(true)
        navigate('/')
      }
      else {
        setResData(res.data)
        setSmShow(true)
      }

    })
  }
  return (
    <motion.div initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}>
      <form className='loginform'>
        <h5>Email</h5>
        <div className='email'>
          <i class="fa-solid fa-envelope-open"></i><input className='logininput' type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <h5>Password</h5>
        <div className='email'>
          <i class="fa-solid fa-lock"></i> <input className='logininput' type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
        </div>

        <p><input type="checkbox" className='checkbox' /> By click this you agree to the Term and condition of the company</p>
        <Button onClick={handleLogin} className='loginbtn'><i className="fa-solid fa-right-to-bracket mx-2"></i>Login</Button>
      </form>
      <p style={{ marginLeft: "50px", }} className="my-4">Do Not have a account ?  <Link to="/register">Create One</Link></p>
      <Modal
        style={{ color: "black" }}
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm" style={{ color: "red" }}>
            IMPORTANT !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: "Large" }}>{resData}</Modal.Body>
      </Modal>

    </motion.div >
  )
}
