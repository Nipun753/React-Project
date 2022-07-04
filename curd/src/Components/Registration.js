import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Footer from './Footer';

export default function Registration() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [dbEmail, setDbEmail] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3001/api/users";
    axios.get(url).then((res) => {
      console.log(res.data)
      setDbEmail(res.data)
    })

  }, [])


  const handleName = (e) => {
    setName(e.target.value);

  };

  const handleEmail = (e) => {
    setEmail(e.target.value);

  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dbEmail.map((sin, idx) => {
      if (sin.email === email) {
        console.log("Email Already Exist");

      }
      else {

        axios.post('http://localhost:3001/api/users/store', {
          "name": name,
          "email": email,
          "password": password
        })
          .then(function (response) {
            console.log(response);
            alert("Added to DataBase")
          })
          .catch(function (error) {
            console.log(error);
          });
        setName("");
        setEmail("");
        setPassword("");

      }
    })
  }





  return (
    <>

    <div className='Registration'>
      <h1>Registration Form</h1>

      <form>

        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />

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
      <p>Already a User? <Link to="/Login">Login</Link></p>
    </div>
    <Footer/>
    </>
  )
}
