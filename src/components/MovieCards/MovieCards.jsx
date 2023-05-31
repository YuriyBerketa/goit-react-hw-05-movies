import defImg from '../../img/notPictyre.jpg'
import {
  MovieDetailsImg,
  MovieDetailsAbout,
  MovieDetailsTitle,
  MovieDetailsScore,
  MovieDetailsOverview,
  MovieDetailsOverviewText,
  MovieDetailsGenres,
  MovieDetailsGenresText,
  MovieDetailsCard,
} from './MovieCards.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    const { overview, title, release_date, genres, vote_average} = movie;
    let poster;
                if (movie.poster_path) {
                    poster = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;                   
                } else {
                    poster = defImg;
    }
    return(
        <MovieDetailsCard>
      <MovieDetailsImg src={poster} alt={title} />
      <MovieDetailsAbout>
        <MovieDetailsTitle>
          "{title}"({new Date(release_date).getFullYear()})
        </MovieDetailsTitle>
        <MovieDetailsScore>
          User Score: {Math.round(vote_average * 10)}%
        </MovieDetailsScore>
        <MovieDetailsOverview>Overview</MovieDetailsOverview>
        <MovieDetailsOverviewText>{overview}</MovieDetailsOverviewText>
        <MovieDetailsGenres>Genres</MovieDetailsGenres>
        <MovieDetailsGenresText>
          {genres.map(genre => genre.name).join(', ')}
        </MovieDetailsGenresText>
      </MovieDetailsAbout>
    </MovieDetailsCard>
    )
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
