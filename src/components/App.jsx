import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetail'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Review/Review'));
const NotFound = lazy(() => import('../pages/NotFound'));


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
