
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';
// import card from "./cart4.svg"
// import "./Nav-bar.css"
// import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { REMOVE_CART_ITEMS ,CLEAR_ALL} from '../Redux/Action/Action';
import { REMOVE_CART_ITEMS,CLEAR_ALL } from '../../Redux/Action/Action';

function Cardbuy(){
    const [price,setPrice]=useState(0)

    const getdata=useSelector((state)=>state.ReducerAction.card)
  
  console.log(getdata)
  const Back=useNavigate()
  
  const dispatch=useDispatch()
  
  const [cartOpen, setCartOpen] = useState(false);
  
//   const toggleCart = () => {
//     setCartOpen(!cartOpen);
//   };
  
  const closeCart = () => {
    setCartOpen(false);
  };
  
  const del=(id)=>{
    dispatch( REMOVE_CART_ITEMS(id))
  }
  const del1=()=>{
    dispatch( CLEAR_ALL())
    alert("product is Buy sucessfully")
      Back("/products")
  }
  
  const total=()=>{
    let Price=0
    getdata.map((ele,k)=>{
     Price=ele.price * ele.quantity+Price
    })
    setPrice(Price)
  }
  
  useEffect(()=>{
    total()
  },[total])
    return(
        <>
        <h1>Buy card Items</h1>


        <div style={{marginLeft:"30%"}}>
           {
          getdata.length
          ?
          <div className='card_details'style={{width:"340px",padding:10}}  >
            <Table >
              <thead>
                <tr>
                  <th>Photo</th>
                  <Link to={"/productdetails/:id"}> <th>Details</th></Link>
                 
                </tr>
              <tr></tr>
              </thead>           
              <tbody>
                {
                  getdata.map((eachobject)=>{
                    return(
                      <>
                      <tr key={eachobject.id}>
                       <td >
                       <Link to={`/productdetails/${eachobject.id}`} > <img src={eachobject.images[0]} alt='Card' style={{height:"90px",width:"90px"}}></img>   </Link>
                  </td>
                  <td >
                 <p> <strong>Brand</strong> : {eachobject.brand} </p>
                 <p> <strong>Category</strong> : {eachobject.category} </p>
                 <p> <strong>Price</strong> : ₹ {eachobject.price} </p>
                 <p> <strong>Quantity</strong> : {eachobject.quantity}</p>
                 <p style={{color:"red",cursor:"pointer",fontSize:20}} onClick={()=>del(eachobject.id)} > <i className='fas fa-trash ' ></i></p>
                </td>
                </tr>
                      </>
                    )
                  })
                }
                <p><strong>Total</strong> : ₹ {price}</p>
                <button onClick={del1}>Buy Now</button>
                {/* <Link to={"/productdetails/buy"}><button>Buy Now</button></Link> */}
              </tbody>
            </Table>
            </div>
            :
            <div>
            <Button variant="light" className="close-button" onClick={closeCart}> <i className="fas fa-close smallclose" style={{cursor:"pointer"}} ></i></Button>
            <p>Your card is empty</p>
            </div>
        }
        </div>


        </>
    )
}
export default Cardbuy



