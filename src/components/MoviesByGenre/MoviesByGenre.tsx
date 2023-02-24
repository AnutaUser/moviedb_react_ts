import React, {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";

const MoviesByGenre: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const with_genres = 'with_genres';

    const genreId = JSON.parse(localStorage.getItem(with_genres)!);
    console.log(genreId);

    useEffect(() => {
        dispatch(movieActions.getByGenreId({with_genres: genreId}));
    }, [genreId, dispatch]);

    return (
        <div>
            {
                !!genreId && movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {
    MoviesByGenre
};
