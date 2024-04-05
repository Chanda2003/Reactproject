

import Carousel from 'react-bootstrap/Carousel';
import "./Carousal.css"
import Image, { Image1, Image2 } from './Images';
import { Link } from 'react-router-dom';

function Carousells() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
       
        {/* <Image/> */}
        <Link to={"/products"}><Image/></Link>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      
          {/* <Image1/> */}
          <Link to={"/products"}> <Image1/></Link>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
       
        {/* <Image2/> */}
        <Link to={"/products"}><Image2/></Link>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousells;