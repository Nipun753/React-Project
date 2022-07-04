import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

export default function Carousels() {
  return (
    <>
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images7.alphacoders.com/611/thumb-1920-611138.png"
      alt="First slide"
     
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images7.alphacoders.com/593/thumb-1920-593476.png"
      alt="Second slide"
      
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images8.alphacoders.com/545/thumb-1920-545909.jpg"
      alt="Third slide"
     
    />
    
  </Carousel.Item>
</Carousel>
    </>
  )
}
