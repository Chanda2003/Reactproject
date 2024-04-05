import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import  { BasicExample } from '../../Spinners/Spinner';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ADD_TO_CART } from '../../Redux/Action/Action';
import { Link } from 'react-router-dom';
import "./groceries.css"

// function Grocesries(){

//     const dispatch=useDispatch()

//     const send=(eachobject)=>{
//          dispatch(ADD_TO_CART(eachobject))
//     }
    
//     const [product,setProducts]=useState([])
//     const [filter,setFilter]=useState([])
//     const [home,setHome]=useState([])
//     console.log(filter)
//    useEffect(()=>{
//     axios.get("https://dummyjson.com/products")
//     .then(response=>
//         {
//         setProducts(response.data.products)
//         }
//         )
//    },[])

//    useEffect(() => {
//     // Filter products by category
//     const groceriesData = product.filter(product => product.category === "groceries");
//     setFilter(groceriesData);

//     const homeDecorationData = product.filter(product => product.category === "home-decoration");
//     setHome(homeDecorationData);
// }, [product]);


//     return(
//         <>
         
//  <br></br> <br></br>
//         <h2 style={{marginLeft:"40%"}}>Latest Products</h2>
 
//    {
//     filter.length>0
//     ?        
//     filter.map((eachobject)=>{
//     return(
//         <>
// <Card className="Card" style={{ width: '18rem' }}>
//   <Card.Img className="Image" variant="top" src={eachobject.images[0]} />
//   <Card.Body>
//     <Card.Title>{eachobject.title}</Card.Title>
//     <Card.Text>
//      {eachobject.description}
//     </Card.Text>
//     <div style={{fontSize:"20px",color:"black"}}><span style={{fontWeight:"bold",fontSize:"25px"}}>Price :</span> ₹  {eachobject.price}</div>
//     <br></br>
//     <Button variant="primary" style={{width:"260px"}} onClick={()=>send(eachobject)}>Add to card</Button>
//   </Card.Body>
// </Card>
//         </>
//     )
// })
//     :
//     <BasicExample/>
  
// }


// {
//     home.length>0
//     ?        
//     home.map((eachobject)=>{
//     return(
//         <>
// <Card className="Card" style={{ width: '18rem' }}>
//   <Card.Img className="Image" variant="top" src={eachobject.images[0]} />
//   <Card.Body>
//     <Card.Title>{eachobject.title}</Card.Title>
//     <Card.Text>
//      {eachobject.description}
//     </Card.Text>
//     <div style={{fontSize:"20px",color:"black"}}><span style={{fontWeight:"bold",fontSize:"25px"}}>Price :</span> ₹  {eachobject.price}</div>
//     <br></br>
//     <Button variant="primary" style={{width:"260px"}} onClick={()=>send(eachobject)}>Add to card</Button>
//   </Card.Body>
// </Card>
//         </>
//     )
// })
//     :
//     <BasicExample/>
  
// }



//         </>
//     )
// }
// export default Grocesries




function Grocesries(){

        const dispatch=useDispatch()

    const send=(eachobject)=>{
         dispatch(ADD_TO_CART(eachobject))
    }
    
    const [product,setProducts]=useState([])
    const [filter1,setFilter]=useState(product)
    // const [home,setHome]=useState([])
    console.log(filter1)
   useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then(response=>
        {
        setProducts(response.data.products)
        setFilter(response.data.products)
        }
        )
   },[])
   

   const filterProduct=(cat)=>{
    const updatedproduct=product.filter((item)=>item.category === cat)
    setFilter(updatedproduct)
   }

    return(
        <>
        <h2 style={{marginLeft:"40%"}}>Latest Products</h2>
        <button className='but' style={{marginLeft:"30%"}} onClick={()=>setFilter(product)}>ALL</button>
        <button className='but' onClick={()=>filterProduct("laptops")}>Laptops</button>
        <button className='but' onClick={()=>filterProduct("smartphones")}>Smart Phones</button>
        <button className='but' onClick={()=>filterProduct("fragrances")}>Fragrances</button>
        <button className='but' onClick={()=>filterProduct("skincare")}>Skin care</button>

<br></br>

         {
   filter1.length>0
    ?        
   filter1.map((eachobject)=>{
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
export default Grocesries