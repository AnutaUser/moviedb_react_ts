import React, {FC, ReactNode} from "react";

import css from "./Movie.module.css";
import {IMovie} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie;
    children?: ReactNode;
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, original_title, poster_path} = movie;

    const navigate = useNavigate();

    return (
        <div className={css.Movie}>
            <button onClick={() => navigate(id.toString(), {state: movie})}>

                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title}
                     className={css.MoviePoster}/>

                <div>

                </div>
                <h4 className={css.MovieTitle}>
                    {original_title.toUpperCase()}
                </h4>
            </button>
        </div>
    );
};

export {
    Movie
};
