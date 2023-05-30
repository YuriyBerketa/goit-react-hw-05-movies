import { fetchMovieDetails } from "api/fetchApi";
import MovieCard from "components/MovieCards/MovieCards";
import { Suspense, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const linkToBack = location.state ?.from ?? '/';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetchMovieDetails(movieId);
                setMovie(res);
            } catch (error) {
                setError(error)
            }
        };
        fetchMovies();
    }, [movieId]);

    return (
        <>
            <>
                <div>
                    {' '}
                    <Link to={linkToBack}>Back to all movies</Link>
                </div>
                {error && <div>Something wrong</div>}
                {movie && (
                    <>
                        <MovieCard movie={movie} />

                        <div>
                            <h3>
                                Additiona information
                            </h3>
                            <NavLink to={'cast'} state={location.state}>
                                Cast
                            </NavLink>
                            <NavLink to={'reviews'} state={location.state}>
                                Reviews
                            </NavLink>
                        </div>
                    </>
                )}
            </>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
  
    );
}

export default MovieDetails;