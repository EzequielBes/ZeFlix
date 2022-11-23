import * as C from "./style";

export function FeatureMovie({ item }: any) {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres) {
    genres.push(item.genres[i].name)
  }
  let description = item.overview;
  if(description.length > 200) {
    description = description.substring(0, 150) + '...'
  }


  return (
    <C.Featured
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <C.FeaturedVertical>
        <C.FeaturedHorizontal>
          <C.FeaturedName>{item.original_name}</C.FeaturedName>
          <C.FeaturedInfo>
            <C.Points>{item.vote_average} Pontos</C.Points>
            <C.Year>{firstDate.getFullYear()}</C.Year>
            <C.Seasons>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </C.Seasons>
          </C.FeaturedInfo>
          <C.FeaturedDesc>{description}</C.FeaturedDesc>
          <C.Buttons>
            <a href={`/watch/${item.id}`} className='watchButton'>Assitir</a>
            <a href="" className='listButton'>+ Minha lista</a>
          </C.Buttons>
          <C.FeaturedGenre><strong>Gêneros: </strong>{genres.join(',')}</C.FeaturedGenre>
        </C.FeaturedHorizontal>
      </C.FeaturedVertical>
    </C.Featured>
  );
}
