import React, {FC, ReactNode} from "react";

import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie;
    children?: ReactNode;
}

const MovieDetails: FC<IProps> = ({movie}) => {

    const {
        original_title,
        title,
        original_language,
        // spoken_languages: [{name}],
        backdrop_path,
        poster_path,
        popularity,
        budget,
        // genres: [{name: genreName}],
        release_date
    } = movie;

    // const genreName = genres.map(value => value.name);

    return (
        <div>{
            !!movie &&
            <div>
                <div>original_title: {original_title}</div>
                <div>title: {title}</div>
                <div>original_language: {original_language}</div>
                <div>backdrop_path: {backdrop_path}</div>
                <div>poster_path: {poster_path}</div>
                <div>popularity: {popularity}</div>
                <div>budget: {budget}</div>
                {/*<div>genres: {genreName}</div>*/}
                <div>release_date: {release_date}</div>
                {/*<div>spoken_languages: {name}</div>*/}
            </div>
        }</div>
    );
};

export {
    MovieDetails
};
