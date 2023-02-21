import React, {FC, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import {useAppSelector} from "../../hooks";
import {IMovie} from "../../interfaces";

const MovieSearch: FC = () => {

    const ref = useRef(null);
    const {movies} = useAppSelector(state => state.movieReducer);

    const findMovie = (movieName: string) => {
        console.log(movieName);
    };

    return (
        <div>
            {/*<input type="text" ref={ref}/>*/}
            {/*<button onClick={findMovie}>*/}
            {/*    <FontAwesomeIcon icon={faSearch}/>*/}
            {/*</button>*/}
        </div>
    );
};

export {
    MovieSearch
};
