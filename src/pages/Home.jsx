import { fetchTrendingApi } from "api/fetchApi";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import defImg from '../img/notPictyre.jpg'



const Home = () => {
    const [trendings, setTrendings] = useState([]);
    console.log(trendings);
    useEffect(() => {
        async function moviesTrendFetch() {
            try {
                const data = await fetchTrendingApi();
                setTrendings([...data.results]);
                
            } catch (error) {
                console.log(error)
            }
        }
        moviesTrendFetch();
    },[])

    return (

        <>
            <h1>Trending movies</h1>
            {trendings && (<div>{trendings.map(({poster_path, id, title}) => {
                let poster;
                if (poster_path) {
                    poster = `https://image.tmdb.org/t/p/w400${poster_path}`;
                    // console.log(poster);
                } else {
                    poster = defImg;
                    // console.log(poster);
                }

                return (<Link key={id} to={`/movies/${id}`}>
                    <img src={poster} width='400' alt={title} />
                    <h2>{ title}</h2>
                </Link>)

            })}</div>)}
        </>




    )
        // <div> компонент Home, домашня сторінка зі списком популярних кінофільмів.</div >)
}

export default Home;