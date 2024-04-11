import { Link, useNavigate, useParams } from "react-router-dom";
// import Button from "../../Nav-bar/Button"
import "./Products-details.css"
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_CART_ITEMS, REMOVE_ONE_ITEAM } from "../../Redux/Action/Action";
import { ADD_TO_CART } from "../../Redux/Action/Action";


function ProductDetails(){
    const [data,setData]=useState([])
// console.log(data)
const {id}=useParams()
// console.log(id)

const Back=useNavigate()

const dispatch=useDispatch()

const getdata=useSelector((state)=>state.ReducerAction.card)
// console.log(getdata)
const compare=()=>{

    let comparedata=getdata.filter((ids)=>{
        return ids.id == id
    })
    setData(comparedata)

}

useEffect(()=>{
   
    compare()

},[id])

const send=(eachobject)=>{
    dispatch(ADD_TO_CART(eachobject))
}

const del=(id)=>{
    dispatch(REMOVE_CART_ITEMS(id))
    Back("/products")
}

const remove=(Item)=>{
    dispatch(REMOVE_ONE_ITEAM(Item))
}


    return(
        <>
       
        <Link to={"/products"} style={{color:"black",fontSize:"50px",marginLeft:"20px"}}><i class="fa-solid fa-arrow-left"></i></Link>
       
        <h1>Product Details</h1>
      
         <div className="container mt-2 container">

        <section className="container mt-3">
            <div className="iteamsdetails">
            
                {
                    data.map((items)=>{
                        return(
                            <>
                            

                <div className="items_img">
                <img src={items.images[0]} alt="John"></img>
                </div>
                <div className="details">
                <Table>
                    <tr>
                        <td style={{width:"260px"}}>
                            
                            <p><strong>Brand</strong> : {items.brand}</p>
                            <p><strong>Description</strong> : {items.description}</p>
                            <p><strong>Price</strong> : ₹ {items.price}</p>
                            <p><strong>Total</strong> : ₹ {items.price * items.quantity}</p>
                               
                               <div style={{background:"brown",width:"100px",color:"white",display:"flex",justifyContent:"space-between",cursor:"pointer",borderRadius:"30px"}}>
                                <span style={{fontSize:"30px"}} onClick={items.quantity <= 1 ? ()=>del(items.id) :()=>remove(items)}>-</span>
                                <span style={{fontSize:"30px"}}>{items.quantity}</span>
                                <span style={{fontSize:"30px"}} onClick={()=>send(items)}>+</span>
                               </div>    
                        </td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td style={{marginLeft:"80px" }}>
                            <p><strong>Rating :</strong> <span style={{backgroundColor:' rgb(8, 215, 194)',color:"black",padding:"4px 10px",fontSize:"20px",borderRadius:"10px"}}>{items.rating} ★</span></p>
                            <p><strong>Stock :</strong> {items.stock}</p>
                            <p><strong>Remove : </strong> <i className="fas fa-trash" style={{color:"red",cursor:"pointer"}} onClick={()=>del(items.id)}></i></p>
                        </td>
                    </tr>
                </Table>

                </div>
                            </>
                        )
                    })
                }
            </div>
        </section>
        </div>
        </>
    )
}
export default ProductDetails