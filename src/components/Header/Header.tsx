import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header: FC = () => {

    return (
        <div className={css.Header}>
            <div className={css.HeaderNav}>
                <NavLink to={'/'}>HOME</NavLink>
                <NavLink to={'/movie'}>MOVIES</NavLink>
            </div>

            <div className={css.HeaderUser}>
                <div className={css.HeaderUserName}>A</div>
                <div className={css.HeaderUserLogout}>logout</div>
            </div>
        </div>
    );
};

export {
    Header
};
