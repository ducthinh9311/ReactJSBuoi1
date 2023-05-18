
import Header from "./components/header/Header";
import { Routes,Route,Link } from "react-router-dom";
import Home from "./page/home/Home";
import MovieDetail from "./page/moviedetail/MovieDetail";
import MovieList from "./components/MovieList/MovieList";
import "./App.css"
export default function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/*" element={<Home/>}></Route>
        <Route path="movie/:id" element={<MovieDetail/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
      </Routes>
    </div>
  );
}

