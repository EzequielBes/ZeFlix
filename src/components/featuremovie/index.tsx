import { HomeListProps } from "../../types/HomeList";
import * as C from "./style";

export function FeatureMovie({ items }: HomeListProps) {

  let firstDate = new Date(items.first_air_date);
  let genres = [];
  for(let i in items.genres) {
    genres.push(items.genres[i].name)
  }
  let description = items.overview;
  if(description.length > 200) {
    description = description.substring(0, 150) + '...'
  }


  return (
    <C.Featured
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${items.backdrop_path})`,
      }}
    >
      <C.FeaturedVertical>
        <C.FeaturedHorizontal>
          <C.FeaturedName>{items.original_name}</C.FeaturedName>
          <C.FeaturedInfo>
            <C.Points>{items.vote_average} Pontos</C.Points>
            <C.Year>{firstDate.getFullYear()}</C.Year>
            <C.Seasons>
              {items.number_of_seasons} temporada
              {items.number_of_seasons !== 1 ? "s" : ""}
            </C.Seasons>
          </C.FeaturedInfo>
          <C.FeaturedDesc>{description}</C.FeaturedDesc>
          <C.Buttons>
            <a href={`/watch/${items.id}/${items.title}`} className='watchButton'>Assitir</a>
            <a href="" className='listButton'>+ Minha lista</a>
          </C.Buttons>
          <C.FeaturedGenre><strong>Gêneros: </strong>{genres.join(',')}</C.FeaturedGenre>
        </C.FeaturedHorizontal>
      </C.FeaturedVertical>
    </C.Featured>
  );
}
