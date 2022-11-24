export interface HomeListProps {
  title?: string,
  items: {
    adult?: boolean;
    backdrop_path?: string;
    genres: [{id:number, name: string}];
    id: number;
    title: string;
    vote_average:number;
    release_date: Date;
    poster_path: URL;
    first_air_date: Date;
    original_name: string;
    number_of_seasons: number;
    overview: string;
    results: [];
    original_title: string;
    
  }
}