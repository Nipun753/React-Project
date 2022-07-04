import React, { useContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { userData } from '../App'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function Dashboard() {
    const userDatas = useContext(userData)
    console.log(userDatas)
    const [show, setShow] = useState(false);
    const [password, setpassword] = useState("")
    const [confrimPassword, setconfrimPassword] = useState("")

    function handlePassword(e) {
        setpassword(e.target.value)
    }
    function handleConfirmPassword(e) {
        setconfrimPassword(e.target.value)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handleUpdate() {
        if (password === confrimPassword) {
            axios.post('http://localhost:3001/api/users/update', {
                "email": userDatas.email,
                "password": password
            })
                .then(function (response) {
                    console.log(response);
                    alert("Password is Changed")
                })
                .catch(function (error) {
                    console.log(error);
                });
            setShow(false)
        }
    }

    return (
        <>
            <Container className='mt-5 text-center'  >
                <h1> HY 👏 {userDatas.name} to your Dashboard</h1>
                <Container>
                    <Button className='mt-4' variant="primary" onClick={handleShow}>
                        Change Password
                    </Button>

                    <Modal show={show} onHide={handleClose} className='w-70'>
                        <Modal.Header closeButton>
                            <Modal.Title>Change Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='text-black'>Password</Form.Label>
                                    <Form.Control onChange={handlePassword}
                                        type="password"
                                        placeholder="*******"
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label className='text-black'>Confirm Password</Form.Label>
                                    <Form.Control onChange={handleConfirmPassword}
                                        type="password"
                                        placeholder="*******"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleUpdate}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </Container>
        </>
    )
}
