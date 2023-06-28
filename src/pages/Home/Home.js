import { Link } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [animes, setAnimes]= useState([])

const [page,setPage]= useState(1)

const page2 = ()=>{
setPage(2)
}
const page1 = ()=>{
setPage(1)
}
const page3 = ()=>{
setPage(3)
}

    useEffect(()=>{
    fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`)
    .then(Response => Response.json())
    .then(data => setAnimes(data.data))


},[page])
    return (
        <div>
        <div className='container'>
            <h1>nao queria ANIMES mas yu-gi-oh tava em php</h1>
           <div className='colunm'>
            {animes.map(anime=>{
                return (
                    <div className='arrumar'>
                        <div key={anime.mal_id}>
                        <Link to= {`/details/${anime.mal_id}`}><img src = {anime.images.jpg.image_url} /></Link>
                    <h1>{anime.title}</h1>
                    </div>
                    </div>
                )
            })}
           </div>
        </div>
            <button onClick={page1}>Pagina 1</button>
            <button onClick={page2}>Pagina 2</button>
            <button onClick={page3}>Pagina 3</button>
        </div>
    );
}
    
export default Home;