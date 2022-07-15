import React from 'react'
import { Container } from 'react-bootstrap'
import '../Css/Home.css'
import { motion } from 'framer-motion'
import CarouselFade from '../Components/CarouselFade'
export default function Home() {
    return (
        <Container>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 5 }}
                className='welcome'>
                <h2>Welcome User</h2>
            </motion.div>
            {/* <CarouselFade /> */}
        </Container>
    )
}
