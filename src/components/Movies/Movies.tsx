import React, {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

import css from './Movies.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import {MoviesByGenre} from "../MoviesByGenre/MoviesByGenre";

const Movies: FC = () => {

    const dispatch = useAppDispatch();
    const {movies, page, total_pages} = useAppSelector(state => state.movieReducer);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getALL({page: +query.get('page')!}));
    }, [query, dispatch]);

    const prev = () => {
        setQuery(query => ({page: (+query.get('page')! - 1).toString()}));
    };
    const next = () => {
        setQuery(query => ({page: (+query.get('page')! + 1).toString()}));
    };

    return (
        <div>
            <div className={css.Movies}>
                {
                    !!movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>

            <MoviesByGenre/>

            <div className={css.MoviesButton}>
                <button
                    disabled={page === 1}
                    onClick={() => prev()}
                >
                    <FontAwesomeIcon icon={faArrowLeft} className={css.icon}></FontAwesomeIcon>
                </button>

                <button
                    disabled={page === total_pages}
                    onClick={() => next()}
                >
                    <FontAwesomeIcon icon={faArrowRight} className={css.icon}></FontAwesomeIcon>
                </button>
            </div>

        </div>
    );
};

export {
    Movies
};
