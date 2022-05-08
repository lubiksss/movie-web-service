import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)
    const getMovie = async () => {
        const movie = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await movie.json();
        setLoading(false)
        setMovie(json)
    }
    useEffect(() => {
        getMovie()
    }, [])
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <img src={movie.data.movie.background_image_original}
                         alt={movie.data.movie.title}/>
                    <img src={movie.data.movie.medium_cover_image}
                         alt={movie.data.movie.title}/>
                    <h2> {movie.data.movie.title} </h2>
                    <p>{movie.data.movie.description_full}</p>
                    <ul>
                        {movie.data.movie.genres.map(g =>
                            <li key={g}>{g}</li>
                        )}
                    </ul>
                </div>}
        </div>
    );
}

export default Detail;