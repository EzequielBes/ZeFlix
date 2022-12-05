import {FaPlay} from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tmdb from "../../Tmdb";
import * as C from './style'



export function Movies() {

  const [filme,setFilme] = useState<any>([])
  

  const params = useParams()
  console.log(params)

  useEffect(()=>{
    if(params.id){
      loadMovie(params.id)
    }
  },[])

  async function loadMovie(id:any){
    let tv = await Tmdb.getMovie(id,'tv')
    let movie = await Tmdb.getMovie(id,'movie')
    let all = await Tmdb.getMovie(id, 'all')
    
    
    if(tv.success !== false ){
      setFilme(tv)
    }else
    if(movie.success !== false){
      setFilme(movie)
    }
    
  }
  
  let title = filme.title;
  let poster = filme.backdrop_path;
  let firstDate = new Date(filme.release_date) 

  if(filme.release_date == null || ''){
    firstDate = new Date(filme.first_air_date)
  }

  if(filme.backdrop_path === null || ''){
    poster = filme.poster_path
  }

  
  if(filme.title == null){
    if(filme.original_name !== null){
      title = filme.original_name
    }else if(filme.original_title !== null){
      title = filme.original_title
    }
  }

  let genres = []
  for(let i in filme.genres){
    genres.push(filme.genres[i].name)
  }

  console.log(filme)

  return(
    <C.Container style={{
      background: 'cover',
      backgroundPosition:'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
      
    }}>
      <div className="feature">
        <div className="feature-horizontal">
          <div className="box-info">
            <div className="title">
              {title}
            </div>
            <div className="info">
              <span className="date">
                Data de lançamento: {firstDate.getFullYear()}
              </span>
              <span className="description">
                {filme.overview}
              </span>
              <span className="genres">
                {genres}
              </span>
              <button>Assistir <FaPlay/> </button>
            </div>
          </div>
        </div>
      </div>
      {filme.length <= 0 && 
        <div className="loading">
            <img src="https://media.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif" alt="carregando"/>
        </div>
      }
    </C.Container>
  )
  
   
  
}