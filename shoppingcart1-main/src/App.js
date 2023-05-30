import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import CustomCart from "./components/cart/CustomCart";
import Nav1 from "./components/nav";
function App() {
  return (
    <div className="App">
      <Nav1 />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CustomCart />} />
      </Routes>
    </div>
  );
}

export default App;
