import { API_KEY, API_URL } from "../constants";
import axios from "axios";

export const getMoviesListRequest = () => {
  return axios.request(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`
  );
};
export const getTrendingMoviesListRequest = () => {
  return axios.request(
    `${API_URL}trending/all/day?api_key=${API_KEY}&language=en-US&page=3`
  );
};

export const getUpcomingMoviesListRequest = () => {
  return axios.request(
    `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=3`
  );
};

export const getTvShows = () => {
  return axios.request(
    `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const getPeopleRequest = () => {
  return axios.request(
    `${API_URL}person/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
};
export const search = (query) => {
  return axios.request(
    `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}&adult=true`
  );
};
export const movieDetailRequest = (id) => {
  return axios.request(
    `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
};

export const tvShowDetailRequest = (id) => {
  return axios.request(`${API_URL}tv/${id}?api_key=${API_KEY}&language=en-US`);
};

export const peopleDetailRequest = (id) => {
  return axios.request(
    `${API_URL}person/${id}?api_key=${API_KEY}&language=en-US`
  );
};
