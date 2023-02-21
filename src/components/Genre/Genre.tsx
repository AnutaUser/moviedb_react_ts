import React, {FC, ReactNode} from "react";
import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre;
    children?: ReactNode;
}

const Genre:FC<IProps> = ({genre}) => {

    const {id, name} = genre;

    const showGenreMovies = (genreId: string) => {
        console.log(genreId)
    };

    return (
        <div>
            <button onClick={() => showGenreMovies(id.toString())}>{name}</button>
        </div>
    );
};

export {
    Genre
};
