import { fetchTrendingApi } from "api/fetchApi";
import { useEffect } from "react";
import { useState } from "react";

import defImg from '../img/notPictyre.jpg';
import {
  MoviesList,
  LinkItem,
  MovieTitle,
  TrendingTitle,
} from '../pages/Page.styled';
import Container from "components/Container/Container";


const Home = () => {
    const [trendings, setTrendings] = useState([]);
    
    useEffect(() => {
        async function moviesTrendFetch() {
            try {
                const data = await fetchTrendingApi();
                setTrendings([...data.results]);
                
            } catch (error) {
               
            }
        }
        moviesTrendFetch();
    },[])

    return (

        <>
            <Container>
            <TrendingTitle>Trending movies</TrendingTitle>
            {trendings && (<MoviesList>{trendings.map(({poster_path, id, title}) => {
                let poster;
                if (poster_path) {
                    poster = `https://image.tmdb.org/t/p/w400${poster_path}`;
              
                } else {
                    poster = defImg;
                    
                }

                return (<LinkItem key={id} to={`/movies/${id}`}>
                    <img src={poster} width='400' alt={title} />
                    <MovieTitle>{ title}</MovieTitle>
                </LinkItem>)

            })}</MoviesList>)}
                </Container>
        </>




    )
        // <div> компонент Home, домашня сторінка зі списком популярних кінофільмів.</div >)
}

export default Home;