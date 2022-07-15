import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import '../Css/DashBoard.css'
export default function DashBoard() {
    return (
        <Container>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 5 }}
                className='welcome'>

            </motion.div>
            {/* <CarouselFade /> */}
        </Container>
    )
}
