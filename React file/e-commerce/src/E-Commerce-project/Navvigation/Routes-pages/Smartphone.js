import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import  { BasicExample } from '../../Spinners/Spinner';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ADD_TO_CART } from '../../Redux/Action/Action';
import { Link } from 'react-router-dom';

function Smartphone(){

    const dispatch=useDispatch()

    const send=(eachobject)=>{
         dispatch(ADD_TO_CART(eachobject))
    }
    
    const [product,setProducts]=useState([])
    const [filter,setFilter]=useState([])
    console.log(filter)
   useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then(response=>
        {
        setProducts(response.data.products)
        }
        )
   },[])

   useEffect(() => {
    // Filter products by category
    const filteredData = product.filter(product => product.category === "smartphones");
    setFilter(filteredData);
}, [product]);


    return(
        <>
         <Link to={"/products"} style={{color:"black",fontSize:"50px",marginLeft:"20px"}}><i class="fa-solid fa-arrow-left"></i></Link>
 
        <h2 style={{marginLeft:"40%"}}>Smart Phones</h2>
 
   {
    filter.length>0
    ?        
    filter.map((eachobject)=>{
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
    <BasicExample/>
  
}
        </>
    )
}
export default Smartphone





