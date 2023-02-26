import React, {FC, useContext, useEffect} from "react";

import css from "./Genrese.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {Genre} from "../Genre/Genre";
import {ThemeContext} from "../../hoc";

const Genres:FC = () => {

    const {theme} = useContext(ThemeContext);

    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    return (
        <div className={css.Genres} id={theme}>

            <h2>Genres</h2>
            {
                !!genres &&
                genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {
    Genres
};
