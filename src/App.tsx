import Tmdb from "./Tmdb";
import { useEffect, useState } from "react";
import { MovieRow } from "./components/movieRow";
import { movieListProps } from "./type";
import { FeatureMovie } from "./components/featuremovie";
import "./app.css";
import { Header } from "./components/header";

export default function App() {
  const [movieList, setMovieList] = useState<any[]>([]);
  const [featureData, setFeatureData] = useState<any>(null);
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 10) {
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  },[])

  return (
    <div>
      <Header black={blackHeader}/>

      {featureData && <FeatureMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito por Ezequiel 
        Direitos de imagem para NetFlix<br/>
        Dados pegos do site Themoviedb.org
      </footer>
      {movieList.length <= 0 && 
        <div className="loading">
            <img src="https://media.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif" alt="carregando"/>
        </div>
      }
    </div>
  );
}
