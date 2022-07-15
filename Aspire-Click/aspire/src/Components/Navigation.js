import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { login, setLogin } from '../App';
import { useNavigate } from 'react-router-dom'
function Navigation() {
    const navigate = useNavigate()
    const setisLogin = useContext(setLogin)
    const log = useContext(login)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/" className='hy'>LOGO</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand ><Link to="/" className='hy'>Home</Link></Navbar.Brand>
                        <Navbar.Brand><Link to="gallery" className='hy'>Gallery</Link></Navbar.Brand>
                    </Nav>
                    {
                        log ?
                            <Nav>
                                <Navbar.Brand ><Link to="dashboard" className='hy'>DashBoard</Link></Navbar.Brand>
                                <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => {
                                    setisLogin(false)
                                    navigate("/")
                                }}>
                                    Log Out
                                </Navbar.Brand>
                            </Nav>
                            :
                            <Nav>
                                <Navbar.Brand ><Link to="register" className='hy'>Sign Up</Link></Navbar.Brand>
                                <Navbar.Brand >
                                    <Link to="/login" className='hy'>Login</Link>
                                </Navbar.Brand>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;