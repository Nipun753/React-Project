import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Gallery from './Pages/Gallery';
import { createContext, useState } from 'react';
import DashBoard from './Pages/DashBoard';

export const login = createContext();
export const setLogin = createContext();
function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      <login.Provider value={isLogin} >
        <setLogin.Provider value={setIsLogin}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </setLogin.Provider>
      </login.Provider>
    </>
  );
}

export default App;
