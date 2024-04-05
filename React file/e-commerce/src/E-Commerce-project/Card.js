import axios from "axios"
import { useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card-style.css"
import SizesExample from "./Spinners/Spinner";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "./Redux/Action/Action";


function ReactCard(){
    const dispatch=useDispatch()

    const send=(eachobject)=>{
         dispatch(ADD_TO_CART(eachobject))
    }

   const[products,setProducts]=useState([])
   console.log(products)


  
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
    
            // Check if data.products is an array
            if (Array.isArray(data.products)) {
              // Update the data to include "quantity: 0" for each product
              const updatedProducts = data.products.map(product => ({
                ...product,
                quantity: 0
              }));
              setProducts(updatedProducts);
            } else {
              console.error('Products array not found in response:', data);
            }
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);

    // console.log(products)




    return(
        <>
{
    products.length>0
    ?        
products.map((eachobject)=>{
    return(
        <>
<Card className="Card" style={{ width: '18rem' }}>
  <Card.Img className="Image" variant="top" src={eachobject.images[0]} />
  <Card.Body>
    <Card.Title>{eachobject.title}</Card.Title>
    <Card.Text>
     {eachobject.description}
    </Card.Text>
    <div style={{fontSize:"20px",color:"black"}}><span style={{fontWeight:"bold",fontSize:"25px"}}>Price :</span> ₹  {eachobject.price}</div>
    <br></br>
    <Button variant="primary" style={{width:"260px"}} onClick={()=>send(eachobject)}>Add to card</Button>
  </Card.Body>
</Card>
        </>
    )
})
    :
    <SizesExample />
  
}

        </>
    )
}

export default ReactCard


