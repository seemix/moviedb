import {environment} from "../../environments/environment";

const {apiKey} = environment;
const {baseURL} = environment;
//export default baseURL;

export const urls = {
  movies: `${baseURL}/discover/movie?api_key=${apiKey}`,
  byId: `${baseURL}/movie`,
  genres: `${baseURL}/genre/movie/list?api_key=${apiKey}`,
  byGenre: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=`,
  popular: `/discover/movie?api_key=${apiKey}&primary_release_year=2022&&sort_by=popularity.desc&page=1`,
}

export const maxPages = '500';
