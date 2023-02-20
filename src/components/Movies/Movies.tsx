import React, {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft, faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";

import css from './Movies.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";

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
        setQuery(query =>  ({page: (+query.get('page')! + 1).toString()}));
    };

    return (
        <div>
            <div>
                <button
                    className={css.CarsComponentButton}
                    disabled={page === 1}
                    onClick={() => prev()}
                >
                    <FontAwesomeIcon icon={faArrowCircleLeft} className={css.icon}></FontAwesomeIcon>
                </button>

                <button
                    className={css.CarsComponentButton}
                    disabled={page === total_pages}
                    onClick={() => next()}
                >
                    <FontAwesomeIcon icon={faArrowCircleRight} className={css.icon}></FontAwesomeIcon>
                </button>
            </div>

            <div>
                {
                    !!movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>

        </div>
    );
};

export {
    Movies
};
