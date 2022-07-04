import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

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
    
  ]
  
  return (
    <> 
      <Container className='mt-3' >
        <Container>
          <Row xs={1} md={4} className="g-4">
            {data.map((sin, idx) => (
              <Col key={idx}>
                <Card >
                  <Card.Img variant="top" src={sin.src} />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  )
}
