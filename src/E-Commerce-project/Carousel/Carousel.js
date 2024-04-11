

import Carousel from 'react-bootstrap/Carousel';
import "./Carousal.css"
import Image, { Image1, Image2 } from './Images';


function Carousells() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
       
        <Image/>
   
        <Carousel.Caption>
        
          <h1>
          <p>Latest Smart Phones</p>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
          <Image1/>
       
        <Carousel.Caption>
       
          <h1>
          <p>Latest Laptops</p>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <Image2/>
        <Carousel.Caption>
          <h1>
          <p> Latest Fragrances</p>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousells;