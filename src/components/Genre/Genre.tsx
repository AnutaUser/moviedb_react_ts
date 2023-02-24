import React, {FC, ReactNode} from "react";
import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre;
    children?: ReactNode;
}

const Genre: FC<IProps> = ({genre}) => {

    const {id, name} = genre;

    let with_genres = 'with_genres';
    localStorage.setItem(with_genres, JSON.stringify(null));

    const showGenreMovies = (id: string) => {
        localStorage.setItem('with_genres', JSON.stringify(id));
        window.location.reload()
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
