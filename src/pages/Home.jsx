import { fetchTrendingApi } from "api/fetchApi";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"


const Home = () => {
    const [trendings, setTrendings] = useState([]);
    console.log(trendings);
    useEffect(() => {
        async function moviesTrendFetch() {
            try {
                const data = await fetchTrendingApi();
                setTrendings([data.results]);
                
            } catch (error) {
                console.log(error)
            }
        }
        moviesTrendFetch();
    },[])

    return (
        
        trendings.map(movie => {
            return (
            
            <Link key={movie.id} to={`${movie.id}`}>
                {/* <div key={movie.id} to={`/movies/${movie.id}`}></div> */}
                    <img src={movie.poster_path} alt={movie.title} />
                </Link>
            
        )}
        )
    )
        // <div> компонент Home, домашня сторінка зі списком популярних кінофільмів.</div >)
}

export default Home;