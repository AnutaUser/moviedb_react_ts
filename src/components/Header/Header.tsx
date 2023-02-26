import React, {FC, useContext} from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {ThemeContext} from "../../hoc";

const Header: FC = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={css.Header} id={theme}>
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
