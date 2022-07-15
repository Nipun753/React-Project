import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Col, Row } from 'react-bootstrap'
import LoginForm from '../Components/LoginForm'
import { motion } from 'framer-motion'

export default function Login() {
    return (
        <div className='Login'>
            <Container  >
                <Row >
                    <Col sm style={{ marginLeft: "20px" }}><LoginForm /></Col>
                    <Col sm className='my-3'> <motion.img animate={{ x: [300, 0] }} src='https://cdn.dribbble.com/userupload/3078394/file/original-b8f254c437ddaef80a709150d3d70ebf.png?compress=1&resize=1024x768' width="350px" height="300px" /> </Col>
                </Row>

            </Container>


        </div>
    )
}
