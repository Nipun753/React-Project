import React from 'react'
import { Container } from 'react-bootstrap'
import Carousels from './Carousels'
import Footer from './Footer'
import HomeCard from './HomeCard'


export default function Home() {
  return (
    <>
      <Container>
        <Container className='mt-4 w-70 '>
          <Carousels />
        </Container>
        <HomeCard />
       
      </Container>
      <Footer/>
    </>
  )
}
