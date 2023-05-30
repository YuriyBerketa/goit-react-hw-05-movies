import defImg from '../../img/notPictyre.jpg'

const MovieCard = ({ movie }) => {
    const { overview, title, release_date, genres, vote_average} = movie;
    let poster;
                if (movie.poster_path) {
                    poster = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;                   
                } else {
                    poster = defImg;
    }
    return(
        <div>
      <img src={poster} alt={title} />
      <div>
        <h2>
          "{title}"({new Date(release_date).getFullYear()})
        </h2>
        <p>
          User Score: {Math.round(vote_average * 10)}%
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres.map(genre => genre.name).join(', ')}
        </p>
      </div>
    </div>
    )
}

export default MovieCard;
