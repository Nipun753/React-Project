import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import RegistrationForm from '../Components/RegistrationForm'

export default function Registration() {

    return (
        <div className='registraion'>
            <Container >
                <Row>
                    <Col sm style={{ marginLeft: "20px" }}><RegistrationForm /></Col>
                    <Col sm className='my-3'> <motion.img animate={{ x: [300, 0] }} src='https://cdn.dribbble.com/users/1355613/screenshots/14671270/media/d79062cd036d84eb32b34e4a4b393a97.jpg?compress=1&resize=768x576&vertical=top' width="350px" height="300px" /> </Col>
                </Row>

            </Container>

        </div>
    )
}
