


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';
import card from "./cart4.svg"
import "./Nav-bar.css"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_CART_ITEMS } from '../Redux/Action/Action';

// function NavBar() {

//   const [price,setPrice]=useState(0)
// // console.log(price)
//   const getdata=useSelector((state)=>state.ReducerAction.card)
//   // const getdataa=useSelector((state)=>state.ReducerAction.quantity)
// console.log(getdata)

// const dispatch=useDispatch()

// const [cartOpen, setCartOpen] = useState(false);

// const toggleCart = () => {
//   setCartOpen(!cartOpen);
// };

// const closeCart = () => {
//   setCartOpen(false);
// };

// const del=(id)=>{
//   dispatch( REMOVE_CART_ITEMS(id))
// }

// const total=()=>{
//   let Price=0
//   getdata.map((ele,k)=>{
//    Price=ele.price * ele.quantity+Price
//   })
//   setPrice(Price)
// }

// useEffect(()=>{
//   total()
// },[total])

//   return (
//     <div className='Nav'>
//     <Navbar expand="lg" className="bg-body-tertiary tertiary " >
//       <Container>
//         <Link to={"/"} className='link'> Home</Link>
//         <Link to={"/products"} className='link' >Products</Link>
//     <Dropdown onToggle={toggleCart} show={cartOpen} className='Dropdownn'>
//       <Dropdown.Toggle variant="success" id="dropdown-basic" style={{marginLeft:'120px'}} >
//       <img className='img' src={card} alt='card' ></img><Badge bg="secondary">{getdata.length}</Badge>
//       </Dropdown.Toggle>
//       <Dropdown.Menu  >
//         <div >
//         {
//           getdata.length
//           ?
//           <div className='card_details'style={{width:"340px",padding:10}}  >
//             <Table >
//               <thead>
//                 <tr>
//                   <th>Photo</th>
//                   <Link to={"/productdetails/:id"}> <th>Details</th></Link>
                 
//                 </tr>
//               <tr></tr>
//               </thead>           
//               <tbody>
//                 {
//                   getdata.map((eachobject)=>{
//                     return(
//                       <>
//                       <tr key={eachobject.id}>
//                        <td >
//                        <Link to={`/productdetails/${eachobject.id}`} > <img src={eachobject.images[0]} alt='Card' style={{height:"90px",width:"90px"}}></img>   </Link>
//                   </td>
//                   <td >
//                  <p> <strong>Brand</strong> : {eachobject.brand} </p>
//                  <p> <strong>Category</strong> : {eachobject.category} </p>
//                  <p> <strong>Price</strong> : ₹ {eachobject.price} </p>
//                  <p> <strong>Quantity</strong> : {eachobject.quantity}</p>
//                  <p style={{color:"red",cursor:"pointer",fontSize:20}} onClick={()=>del(eachobject.id)} > <i className='fas fa-trash ' ></i></p>
//                 </td>
//                 </tr>
//                       </>
//                     )
//                   })
//                 }
//                 <p><strong>Total</strong> : ₹ {price}</p>
//               </tbody>
//             </Table>
//             </div>
//             :
//             <div>
//             <Button variant="light" className="close-button" onClick={closeCart}> <i className="fas fa-close smallclose" style={{cursor:"pointer"}} ></i></Button>
//             <p>Your card is empty</p>
//             </div>
//         }
//         </div>
//       </Dropdown.Menu>
//     </Dropdown>
//     </Container>
//     </Navbar>
//   </div>
//   );
// }

// export default NavBar;



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {


    const [price,setPrice]=useState(0)

  const getdata=useSelector((state)=>state.ReducerAction.card)

console.log(getdata)

const dispatch=useDispatch()

const [cartOpen, setCartOpen] = useState(false);

const toggleCart = () => {
  setCartOpen(!cartOpen);
};

const closeCart = () => {
  setCartOpen(false);
};

const del=(id)=>{
  dispatch( REMOVE_CART_ITEMS(id))
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

  return (
    <Navbar expand="lg"  bg="dark"  variant="dark">
      <Container>
        <Navbar.Brand><Link to={"/"} className='link' >Shop Now</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={"/"} className='link'>Home</Link></Nav.Link> 
            <Nav.Link ><Link to={"/products"} className='link'>Products</Link></Nav.Link>          
            <NavDropdown title="Category" id="basic-nav-dropdown" className='link' style={{color:"white"}}>
              <NavDropdown.Item ><Link to={"/products/Smartphones"} className='link' style={{color:"black",fontSize:"15px"}}>Smart Phone</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"/products/Laptops"} className='link' style={{color:"black",fontSize:"15px"}}>Laptops</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={"/products/fragrances"} className='link' style={{color:"black",fontSize:"15px"}}>Fragrances</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={"/products/Skincare"} className='link' style={{color:"black",fontSize:"15px"}}>Skincare</Link></NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link ><Link to={"/products"} className='link'>Products</Link></Nav.Link> */}
           <Dropdown onToggle={toggleCart} show={cartOpen} className='Dropdownn'>
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginBottom:"20px",marginLeft:"120px"}} >
       <img className='img' src={card} alt='card' ></img><Badge bg="secondary">{getdata.length}</Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu  >
        <div >
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
      </Dropdown.Menu>
    </Dropdown>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;