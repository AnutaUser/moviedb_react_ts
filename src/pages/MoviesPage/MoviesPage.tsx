import React, {FC} from "react";

import css from './MoviesPage.module.css';
import {Genres, Movies, MovieSearch} from "../../components";

const MoviesPage: FC = () => {

    return (
        <div className={css.MoviesPage}>
            <Genres/>
            <div>
                <MovieSearch/>
                <Movies/>
            </div>
        </div>
    );
};

export {
    MoviesPage
};
