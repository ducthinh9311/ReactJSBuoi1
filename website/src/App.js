import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestsellers"></Route>
        <Route path="/products"></Route>
        <Route path="/occasions"></Route>
        <Route path="/recipients"></Route>
        <Route path="/contactus"></Route>
        <Route path="/reviews"></Route>
      </Routes>
    </div>
  );
}
