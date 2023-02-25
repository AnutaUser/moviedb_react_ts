import {axiosService, IRes} from "../../utils";
import {endPoints} from "../endPoints";
import {IMovie, IVideo} from "../../interfaces";

const movieService = {
    getAll: (page: number = 1): IRes<{ page: number; results: IMovie[]; total_pages: number }> =>
        axiosService.get(endPoints.movie, {params: {page}}),

    getById: (id: string): IRes<IMovie> => axiosService.get(endPoints.movieById(id)),

    getByGenreId: (with_genres: number = 35, page: number = 1): IRes<{ results: IMovie[], page: number, }> =>
        axiosService.get(endPoints.movie, {params: {with_genres, page}}),

    getSearchMovies: (query = 'power', page = 1): IRes<{ results: IMovie[], page: number, }> =>
        axiosService.get(endPoints.searchMovies, {params: {query, page}}),

    getVideos: (movie_id: string): IRes<IVideo[]> => axiosService.get(endPoints.videos(movie_id)),
};

export {
    movieService
};
