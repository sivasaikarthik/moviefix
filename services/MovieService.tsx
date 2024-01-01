// src/services/ApiService.ts
import axios, {AxiosInstance, AxiosResponse} from 'axios';

const TMDB_API_KEY = '2dca580c2a14b55200e784d157207b4d';


const tmdbApi: AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const getGenericMovies = async (page: number = 1): Promise<AxiosResponse<any>> => {
  try {
    const response = await tmdbApi.get('/genre/movie/list', {
      params: {
        sort_by: 'popularity.desc',
        page: page,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const discoverMovies = async (
  primaryReleaseYear: number,
  page: number = 1,
): Promise<AxiosResponse<any>> => {
  try {
    const response = await tmdbApi.get('/discover/movie', {
      params: {
        sort_by: 'popularity.desc',
        primary_release_year: primaryReleaseYear,
        page: page,
        vote_count: 100,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
