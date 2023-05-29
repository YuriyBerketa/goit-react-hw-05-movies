import { Route, Routes, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "./MovieDetails/MovieDetails";

// import Layout from "./Layout/Layout";

const App = () => {
  return (

    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
</nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails/>} />
        
  </Routes>
    </div>
  
  );
};

export default App
