import { fetchSearchApi } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import defImg from '../img/notPictyre.jpg';
import {
  MoviesForm,
  MoviesInput,
  MoviesList,
  MoviesSearchButton,
  MovieTitle,
  LinkItem,
} from '../pages/Page.styled';
import Container from "components/Container/Container";


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();
  const [input, setInput] = useState('');
  const inputParams = searchParams.get('filter') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!inputParams) {
      return;
    }

    async function fetch() {
      try {
        const data = await fetchSearchApi(inputParams);
        setMovies([...data.results]);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [inputParams]);

  const onSubmit = e => {
    if (!input) {
      return null;
    }
    e.preventDefault();
    setsearchParams(input !== '' ? { filter: input } : {});
    setInput('');
  };

  const onChangeInput = value => {
    setInput(value);

    if (!movies) {
      return null;
    }
  };

  return (
    <>
      <Container>
      <MoviesForm onSubmit={onSubmit}>
        <MoviesInput
          tupe="text"
          value={input}
          name="input"
          onChange={e => onChangeInput(e.target.value.toLowerCase())}
        />
        <MoviesSearchButton tupe="submit">Search</MoviesSearchButton>
      </MoviesForm>
      <MoviesList>
      {movies.map(({ poster_path, id, title }) => {
        let poster;
        if (poster_path) {
          poster = `https://image.tmdb.org/t/p/w400${poster_path}`;
        } else {
          poster = defImg;
        }
        return (
          <LinkItem key={id} to={`${id}`} state={{ from: location }}>
            <img src={poster} width="400" alt={title} />
            <MovieTitle>{title}</MovieTitle>
          </LinkItem>
        );
      })}
        </MoviesList>
        </Container>
    </>
  );
};

export default Movies;
