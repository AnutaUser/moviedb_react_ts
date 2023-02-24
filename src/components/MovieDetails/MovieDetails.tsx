import React, {FC, ReactNode} from "react";

import css from './MovieDetails.module.css';
import {IMovie} from "../../interfaces";
import {Badges} from "../Badges/Badges";

interface IProps {
    movie: IMovie;
    children?: ReactNode;
}

const MovieDetails: FC<IProps> = ({movie}) => {

    const {
        original_title,
        title,
        original_language,
        poster_path,
        popularity,
        budget,
        genre_ids,
        release_date,
        vote_average,
        vote_count,
        overview
    } = movie;
    console.log(movie)

    return (
        <div className={css.MovieDetails}>{
            !!movie &&

            <div>
                <div>
                    <h2 className={css.MovieDetailsTitle}>{title}</h2>
                    <div className={css.MovieDetailsInfoBadges}>
                        <Badges genre_ids={genre_ids}/>
                    </div>
                </div>

                <div className={css.MovieDetailsInfo}>

                    <div className={css.MovieDetailsInfoImg}>
                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={original_title}/>
                    </div>

                    <div className={css.MovieDetailsInfoData}>

                        <div>Original title: {original_title}</div>
                        <div>Language: {original_language}</div>
                        <div>Popularity: {popularity}</div>
                        {
                            !!budget && <div>Budget: {budget} $</div>
                        }

                        <div>Release Date: {release_date}</div>
                        <div>Vote count: {vote_count}</div>
                        <div>Vote average: {vote_average}</div>
                    </div>
                </div>

                <div className={css.MovieDetailsDescription}>
                    <h2>About film: {title}.</h2>
                    <p>{overview}</p>
                </div>

            </div>

        }</div>
    );
};

export {
    MovieDetails
};
