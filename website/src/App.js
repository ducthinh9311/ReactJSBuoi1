import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import BestSeller from "./pages/bestseller/BestSeller";
import Cart from "./pages/cart/Cart";
import ProductNewArrival from "./pages/productnewarrival/ProductNewArrival";
import Detail from "./pages/detail/Detail";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestsellers" element={<BestSeller />}></Route>
        <Route path="/products"></Route>
        <Route path="/occasions"></Route>
        <Route path="/newarrival" element={<ProductNewArrival/>}></Route>
        <Route path="/bestsellers/:id" element={<Detail/>}></Route>
        <Route path="/newarrival/:id" element={<Detail/>}></Route>
        <Route path="/contactus"></Route>
        <Route path="/reviews"></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
