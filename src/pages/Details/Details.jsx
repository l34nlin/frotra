import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Details = () => {

    const {id} = useParams()
    const [anime,setAnime]= useState({})
    const navigate = useNavigate()
    const backToHome= ()=>{
        navigate('/')
    }
    useEffect(()=>{
        fetch(`https://api.jikan.moe/v4/anime/${id}/moreinfo`)
        .then(Response => Response.json())

        .then(data => {
                
        const anime = {
            id,
            more: data.data.moreinfo

        }
        setAnime(anime)
        console.log(anime)

        })
    

    },[id])
    return (
        <div>
            <div>
                <h1>Descricao do anime</h1>
                <h3>{anime.more}</h3>
                <h5>alguns nao possuem meu bom, culpa da api</h5>

            </div>
        <button onClick={backToHome}> back</button>
        </div>
    );
}

export default Details;