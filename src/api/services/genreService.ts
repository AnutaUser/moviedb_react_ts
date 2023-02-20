import {axiosService, IRes} from "../../utils";
import {IGenre} from "../../interfaces";
import {endPoints} from "../endPoints";

const genreService = {
    getAll: (): IRes<{ genres: IGenre[] }> => axiosService.get(endPoints.genre),
};

export {
    genreService
};
