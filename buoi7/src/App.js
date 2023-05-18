import Api from "./components/Api";
import TestUseEffect from "./components/TestUseEffect";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Header from "./pages/Header";
///Router :giúp đồng bộ URL và định tuyến luồng dữ liệu trong ứng dụng, cài đặt :npm install react-router-dom --save
export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/prices">Prices</Link>
        </li>
      </ul>
      <TestUseEffect />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Products />}>
          <Route path=":id" element={<Product />}></Route>
        </Route>
        <Route path="/prices" element={<Prices />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    
    </div>
  );
}
