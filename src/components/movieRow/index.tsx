import * as C from "./styled";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { HomeListProps } from "../../types/HomeList";
import { useState } from "react";
import {Link} from 'react-router-dom'


export function MovieRow({ title, items }: HomeListProps) {
  const [scrollx, setScrollx] = useState(-500);
  
  
  const handleLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };
  const handlerightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 180;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollx(x);
  };

  function renderMovie(item:any) {
    console.log(item)
  }
  

  return (
    <C.MovieRow>
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBefore style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right">
        <NavigateNext style={{ fontSize: 50 }} onClick={handlerightArrow} />
      </div>
      <C.MovieRowListArea>
        <C.MovieRowList
          style={{
            marginLeft: scrollx,
            width: items.results.length * 180,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item: any, key: number) => (
              <C.MovieRowItem key={key}>
                <Link to={`/Filmes/${item.id}`}onClick={()=> renderMovie(item)}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                  />
                </Link>
              </C.MovieRowItem>
            ))}
        </C.MovieRowList>
      </C.MovieRowListArea>
    </C.MovieRow>
  );
}
