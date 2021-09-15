import { APIKEY } from "../constants";
import axios from "axios";

export const GetMoviesListRequest = () => {
  return axios.request(
    `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=2`
  );
};
export const GetTrendingMoviesListRequest = () => {
  return axios.request(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}&language=en-US&page=3`
  );
};

export const GetUpcomingMoviesListRequest = () => {
  return axios.request(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=3`
  );
};

export const GetTvShows = () => {
  return axios.request(
    `https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=en-US&page=1`
  );
};

export const GetPeopleRequest = () => {
  return axios.request(
    `https://api.themoviedb.org/3/person/popular?api_key=${APIKEY}&language=en-US&page=1`
  );
};
