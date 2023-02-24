import React, {FC, ReactNode, useEffect, useState} from "react";

import css from './Badges.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {IGenre} from "../../interfaces";
import {BadgeForGenres} from "../BadgeForGenres/BadgeForGenres";

interface IProps {
    genre_ids: number[];
    children?: ReactNode;
}

const Badges: FC<IProps> = ({genre_ids}) => {

    const {genres} = useAppSelector(state => state.genreReducer);
    const appDispatch = useAppDispatch();
    const [budgesGenres, setBudgesGenres] = useState<IGenre[]>([]);

    useEffect(() => {

        appDispatch(genreActions.getAll())
        !!genres &&

        genres.map(value => {
            genre_ids.map(genre_id => {
                if (genre_id === value.id) {
                    setBudgesGenres(prev => [...prev, value]);
                }
                return value;
            })
            return value;
        });
    }, [appDispatch, genre_ids]);

    // console.log(budgeGenres)

    return (
        <div className={css.Badges}>
            {
                !!budgesGenres.length && budgesGenres.map(budgeGenre => <BadgeForGenres key={budgeGenre.id} name={budgeGenre.name}/>)
            }
        </div>
    );
};

export {
    Badges
};
