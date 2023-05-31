import { fetchMovieDetails } from "api/fetchApi";
import MovieCard from "components/MovieCards/MovieCards";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import {
  MovieDetailsAdditional,
  MovieDetailsAdditionalTitle,
  NavItem,
  LinkButton,
  LinkBox,
} from '../pages/Page.styled';
import Container from "components/Container/Container";


const MovieDetails = () => {
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const linkToBack = location.state?.from ?? '/';

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
            <Container>
            <>
                <LinkBox>
                    {' '}
                    <LinkButton to={linkToBack}>Back to all movies</LinkButton>
                </LinkBox>
                {error && <div>Something wrong</div>}
                {movie && (
                    <>
                        <MovieCard movie={movie} />

                        <MovieDetailsAdditional>
                            <MovieDetailsAdditionalTitle>
                                Additiona information
                            </MovieDetailsAdditionalTitle>
                            <NavItem to={'cast'} state={location.state}>
                                Cast
                            </NavItem>
                            <NavItem to={'reviews'} state={location.state}>
                                Reviews
                            </NavItem>
                        </MovieDetailsAdditional>
                    </>
                )}
                </>
                </Container>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
  
    );
}

export default MovieDetails;