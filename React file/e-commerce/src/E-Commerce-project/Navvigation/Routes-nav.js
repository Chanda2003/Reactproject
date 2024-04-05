import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Routes-pages/home"
import Products from "./Routes-pages/Products"
import Addtocart from "./Routes-pages/Add-to-cart"
import ProductDetails from "./Routes-pages/Products-details"
import Invaild from "./Routes-pages/Invaild-page"
import Smartphone from "./Routes-pages/Smartphone"
import Laptops from "./Routes-pages/laptops"
import Fragrances from "./Routes-pages/fragrance"
import Skincare from "./Routes-pages/skincare"




function Navigation(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/products" Component={Products}></Route>
            <Route path="/Add-to-cart" Component={Addtocart}></Route>
            {/* <Route path="/:category/:brand/:title/:id" Component={ProductDetails}></Route> */}
            <Route path="/productdetails/:id" Component={ProductDetails}></Route>
            <Route path="*" Component={Invaild}></Route>
            <Route path="/products/Smartphones" Component={Smartphone}></Route>
            <Route path="/products/Laptops" Component={Laptops}></Route>
            <Route path="/products/fragrances" Component={Fragrances}></Route>
            <Route path="/products/Skincare" Component={Skincare}></Route>
        </Routes>
        </BrowserRouter>

        </>
    )
}
export default Navigation