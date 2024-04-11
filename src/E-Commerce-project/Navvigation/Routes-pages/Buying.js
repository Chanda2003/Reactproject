import "./Buying.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from "react-bootstrap/Card"
import { CLEAR_ALL } from '../../Redux/Action/Action';

function Buying(){
  const getdata=useSelector((state)=>state.ReducerAction.card)
  console.log(getdata)
  const Back=useNavigate()
  
  const dispatch=useDispatch()
  
  const del1=()=>{
    dispatch( CLEAR_ALL())
    alert("product is Buy sucessfully")
      Back("/")
  }
    return(
        <>
  {/* <h2 style={{marginLeft:"40%"}}>Buying</h2> */}


<h4 style={{marginLeft:"40%"}}>DEVILERY ADDRESS </h4>
<Card>
  <form>
    <input type="text" placeholder="Full Name" className="input" style={{marginLeft:"30%"}} required></input><br></br>
    <input type="number" placeholder="Phone no" className="input" required></input>
    <input type="number" placeholder="Alternate Phone no" className="input"required></input><br></br>
    <input type="email" placeholder=" Email Id" className="input"required></input>
    <input type="text" placeholder="Pin code" className="input"required></input><br></br>
    <input type="text" placeholder="State" className="input"required></input>
    <input type="text" placeholder="City" className="input"required></input><br></br>
    <input type="text" placeholder="House no" className="input"required></input>
    <input type="text" placeholder="Road Name" className="input"required></input><br></br>
    <input type="text" placeholder="Land Mark" className="input"required></input><br></br>

   <label className="input" style={{fontSize:"20px"}}>Cash on Delivery only</label>&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="radio" value="Cash on delivery" required></input><br></br>
    <input type="Button" value="Buy Now" onClick={del1} className="input button"></input>
    {/* <button onClick={del1} className="input button">Buy Now</button> */}
   
  </form>
  </Card>











        </>
    )
}
export default Buying





// fullname
// ph no
// email id
// pincode
// state
// city
// house no
// road name
// land mark