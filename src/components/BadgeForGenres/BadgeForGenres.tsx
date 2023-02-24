import React, {FC, ReactNode} from "react";
import {Badge} from "@mui/material";

import css from './BadgeForGenres.module.css';

interface IProps {
    name: string;
    children?: ReactNode;
}

const BadgeForGenres:FC<IProps> = ({name}) => {

    return (
        <div className={css.BadgeForGenres}>
            <Badge badgeContent={name} color="warning" className={css.BadgeForGenresItem}/>
        </div>
    );
};

export {
    BadgeForGenres
};
