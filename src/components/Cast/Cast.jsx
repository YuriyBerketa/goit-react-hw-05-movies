import { fetchCast } from "api/fetchApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActorsCard, ActorsList, ActorsName } from './Cast.styled';

const Cast = () => {
const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    const [actors, setActors] = useState();

    useEffect(() => {
      setLoading(true);
      
        fetchCast(Number(movieId))
            .then(setActors)
            .catch(error => console.log(error))
            .finally(setLoading(false));
    }, [movieId]);

    if (!actors) {
        return null;
    }

    let poster;

    const { cast } = actors;

  return (
    <ActorsList>
      {loading && (
        <div>Завантажуємо...</div>
      )}
      {cast.map(actor => {
        if (actor.profile_path) {
            poster = `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
            
        } else {
          poster = `https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg`;
        }
        return (
          <ActorsCard key={actor.id}>
            <img src={poster} width="200" height="300" alt={actor.name} />
            <ActorsName>{actor.name}</ActorsName>
          </ActorsCard>
        );
      })}
    </ActorsList>

  );
};

export default Cast;
