import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import  { BasicExample } from '../../Spinners/Spinner';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ADD_TO_CART } from '../../Redux/Action/Action';
import { Link } from 'react-router-dom';
import {Table} from "react-bootstrap";





function ProductData(){


    // const dispatch=useDispatch()

    // const send=(eachobject)=>{
    //      dispatch(ADD_TO_CART(eachobject))
    // }


    const updateddata=useParams()


const [product,setProducts]=useState(null)
console.log(product)

useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${updateddata.id}`)
    .then((reponse)=>setProducts(reponse.data))
},[updateddata.id])



    return(
        <>
            <Link to={"/products"} style={{color:"black",fontSize:"50px",marginLeft:"20px"}}><i class="fa-solid fa-arrow-left"></i></Link>
 
 <h2 style={{marginLeft:"40%"}}>Product Data</h2>


  {product && (
  
    <div>
     {product.images.length > 0 && (
     
        <img src={product.images[0]} ></img>
    )}
                <div style={{position:"absolute",top:"25%",left:"30%"}} >
                {/* className="details" */}
                <Table>
                    <tr>
                        <td style={{width:"260px"}}>
                            
                            <p><strong>Brand</strong> : {product.brand}</p>
                            <p><strong>Description</strong> : {product.description}</p>
                            <p><strong>Price</strong> : ₹ {product.price}</p>
                          
                        </td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td style={{marginLeft:"80px" }}>
                            <p><strong>Rating :</strong> <span style={{backgroundColor:' rgb(8, 215, 194)',color:"black",padding:"4px 10px",fontSize:"20px",borderRadius:"10px"}}>{product.rating} ★</span></p>
                            <p><strong>Stock :</strong> {product.stock}</p>
                          
                
                        </td>
                    </tr>
                </Table>

                </div>
                </div>

)}






        </>
    )
}
export default ProductData