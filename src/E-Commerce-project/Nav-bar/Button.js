import { Link } from "react-router-dom"



function Button(){
    // console.log(children,onClick)
    return(
        <>
        <button style={{marginLeft:"50px"}}><Link to={"/"} style={{textDecoration:"none",color:"black"}}>Back to Home</Link></button>
        </>
    )
}
export default Button