
import { Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ForgetPassword from './Components/ForgetPassword';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Navigationbar from './Components/NavigationBar';
import Gallery from './Components/Gallery';
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';

export const userData = createContext();
export const loginContext = createContext();
export const setisLogedInContext = createContext();
export const setUserData = createContext();

export default function App() {
  const [isLogedIn, setisLogedIn] = useState(false)
  const [userlogindata, setuserlogindata] = useState([
])

  return (
    <>
      <setUserData.Provider value={setuserlogindata}>
      <userData.Provider value={userlogindata}>
        <loginContext.Provider value={isLogedIn}>
          <setisLogedInContext.Provider value={setisLogedIn}>
            <Navigationbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/registration' element={<Registration />}> </Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
              <Route path="/Gallery" element={isLogedIn ? <Gallery /> : <Navigate to="/Login" />}></Route>
              <Route path="/dashboard" element={isLogedIn ? <Dashboard /> : <Navigate to="/Login" />}></Route>
            </Routes>
          </setisLogedInContext.Provider>
        </loginContext.Provider>
      </userData.Provider>
      </setUserData.Provider>
   
    </>
  );
}