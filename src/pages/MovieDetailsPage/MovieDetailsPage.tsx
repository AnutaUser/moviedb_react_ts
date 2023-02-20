import React, {FC, useEffect, useState} from "react";

import {MovieDetails} from "../../components";
import {useParams} from "react-router-dom";
import {IMovie} from "../../interfaces";
import {useAppLocation} from "../../hooks";
import {movieService} from "../../api";

const MovieDetailsPage:FC = () => {

    const {id} = useParams<{id: string}>();
    const [movie, setMovie] = useState<IMovie | null>(null);
    const {state} = useAppLocation<IMovie>();

    useEffect(() => {
        if (state) {
            setMovie(state);
        } else {
            movieService.getById(id!).then(({data}) => console.log(data));
        }
    }, [id, state]);

    return (
        <div>
            {
                !!movie &&
                <MovieDetails key={id} movie={movie}/>
            }
        </div>
    );
};

export {
    MovieDetailsPage
};
