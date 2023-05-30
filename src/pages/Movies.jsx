import { fetchSearchApi } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import defImg from '../img/notPictyre.jpg';

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
      <form onSubmit={onSubmit}>
        <input
          tupe="text"
          value={input}
          name="input"
          onChange={e => onChangeInput(e.target.value.toLowerCase())}
        />
        <button tupe="submit">Search</button>
      </form>
      {movies.map(({ poster_path, id, title }) => {
        let poster;
        if (poster_path) {
          poster = `https://image.tmdb.org/t/p/w400${poster_path}`;
        } else {
          poster = defImg;
        }
        return (
          <Link key={id} to={`${id}`} state={{ from: location }}>
            <img src={poster} width="400" alt={title} />
            <h2>{title}</h2>
          </Link>
        );
      })}
    </>
  );
};

export default Movies;
