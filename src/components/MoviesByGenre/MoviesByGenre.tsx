import React, {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import {useSearchParams} from "react-router-dom";

const MoviesByGenre: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams({page: '1'});

    const with_genres = 'with_genres';

    const genreId = JSON.parse(localStorage.getItem(with_genres)!);

    useEffect(() => {
        dispatch(movieActions.getByGenreId({with_genres: genreId, page: +query.get('page')!}));
    }, [genreId, dispatch, query]);

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
