const API_KEY:string = 'f265a0718a4c852c2a96012556991057';
const API_BASE:string = 'https://api.themoviedb.org/3';


{/* 
-- originais netflix
-- recomendados
--em alta
--ação
--terror
--romance
--documentarios

*/}

interface Endprops {
  

}

const basicFetch = async (endpoint:Endprops) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async() => {
    return [
      {
        slug: 'originals',
        title: 'originais do NetFlix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-br&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para voce',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Filmes de ação',
        items: await basicFetch(`/discover/movie?with_genres=28&langueage=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comedia',
        items: await basicFetch(`/discover/movie?with_genres=35&langueage=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'terror',
        title: 'Horror',
        items: await basicFetch(`/discover/movie?with_genres=27&langueage=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&langueage=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentario',
        title: 'Documentario',
        items: await basicFetch(`/discover/movie?with_genres=99&langueage=pt-BR&api_key=${API_KEY}`)
      },
      
    ]
  },
  getMovieInfo: async (movieId:number,type:string) => {
    let info = {};

    if(movieId) {
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break;

        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break; 
        
        
      }
    }

    return info;
  },
  getMovie: async (id:any,type:any) => {
    
    if(type === 'tv') {
      const req = await basicFetch(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`)
      return req
    }else if(type === 'movie'){
      const req = await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`)
      return req
    }
     
     
    
  }
}