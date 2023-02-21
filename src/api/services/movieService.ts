import {axiosService, IRes} from "../../utils";
import {endPoints} from "../endPoints";
import {IMovie} from "../../interfaces";

const movieService = {
    getAll: (page: number = 1): IRes<{ page: number; results: IMovie[]; total_pages: number }> => axiosService.get(endPoints.movie, {params: {page}}),
    getById: (id: string): IRes<IMovie> => axiosService.get(endPoints.movieById(id)),
};

export {
    movieService
};
