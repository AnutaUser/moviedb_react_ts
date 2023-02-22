import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import css from './MovieSearch.module.css';
import {useAppSelector} from "../../hooks";
import {IMovie} from "../../interfaces";
import {SubmitHandler, useForm} from "react-hook-form";

const MovieSearch: FC = () => {

    const {register, handleSubmit} = useForm<String>();
    // const ref = useRef(null);
    const {movies} = useAppSelector(state => state.movieReducer);

    const findMovie: SubmitHandler<String> = (movieName): IMovie | IMovie[] | null => {
        console.log(movieName);
        console.log(movies.filter(value => value.title.includes(movieName.toString())));
        return movies
    };

    return (
        <div className={css.MovieSearch}>
            <form  onSubmit={() => handleSubmit(findMovie)}>
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
