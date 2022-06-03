import {IGenre} from "./genre-interface";

export interface IMovieDetailed {
  adult:	boolean;
  backdrop_path: string;
  belongs_to_collection: number;
  name:	string;
  poster_path: string;
  budget:	number;
  genres: IGenre[];
  homepage:	string;
  id:	number;
  imdb_id:	string;
  original_language:	string;
  original_title:	string;
  overview: string;
  popularity:	number;
  production_companies: []
  release_date:	string;
  revenue:	number;
  runtime:	number;
  tagline:string;
  title:	string;
  vote_average:	number;
  vote_count:	number;
}
