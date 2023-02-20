import React, {FC, ReactNode} from "react";

import {IMovie} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie;
    children?: ReactNode;
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, original_title} = movie;

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(id.toString(), {state: movie})}>
                {id} - {original_title}
            </button>
        </div>
    );
};

export {
    Movie
};
