import React, {FC, ReactNode} from "react";
import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre;
    children?: ReactNode;
}

const Genre:FC<IProps> = ({genre}) => {

    const {id, name} = genre;

    return (
        <div>
            Genre
            {id} --{name}
        </div>
    );
};

export {
    Genre
};
