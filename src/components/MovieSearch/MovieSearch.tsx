import React, {FC, useContext, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {SubmitHandler, useForm} from "react-hook-form";

import css from './MovieSearch.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {IMovie} from "../../interfaces";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {Movie} from "../Movie/Movie";
import {ThemeContext} from "../../hoc";

const MovieSearch: FC = () => {

    const {theme} = useContext(ThemeContext);

    const {register, handleSubmit} = useForm<String>();
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [isSearched, setIsSearched] = useState(false);
    const [query] = useSearchParams({page: '1'});

        const findMovie: SubmitHandler<String> = (movieName): IMovie | IMovie[] | null => {
            if (!isSearched) {
                setIsSearched(true);
                setTimeout(() => {
                    setIsSearched(false);
                }, 1000);
            }
            console.log(movieName);

            dispatch(movieActions.getSearchMovies({query: movieName.toString(), page: +query.get('page')!}));
            return movies;
        };

    return (
        <div className={css.MovieSearch} id={theme}>
            {
                isSearched && movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
            <form onSubmit={handleSubmit(findMovie)}>
                <input type="text" {...register('search')}/>
                <button>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </form>
        </div>
    );
};

export {
    MovieSearch
};
