import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { loginContext, setisLogedInContext,userData } from '../App'
import Footer from './Footer'
export default function Gallery() {
  const data = [
    {
      src: 'https://images2.alphacoders.com/606/thumb-1920-606275.jpg',

    },
    {
      src: 'https://images.alphacoders.com/205/thumb-1920-205913.jpg'
    },
    {
      src: 'https://images3.alphacoders.com/726/thumb-1920-72695.png'
    },
    {
      src: 'https://images2.alphacoders.com/606/thumb-1920-606275.jpg'
    },
    {
      src: 'https://images.alphacoders.com/205/thumb-1920-205913.jpg'
    }
  ]
  
  return (
    <> 
      <Container>
        <h1 className='text-center mt-3'>Welcome To Our Gallery</h1>
        <Container>
          <Row xs={1} md={2} className="g-4">
            {data.map((sin, idx) => (
              <Col key={idx}>
                <Card className='cardGallery'>
                  <Card.Img variant="top" src={sin.src} />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Footer/>
    </>
  )
}
