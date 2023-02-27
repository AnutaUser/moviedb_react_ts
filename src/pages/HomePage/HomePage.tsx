import React, {FC, useContext} from "react";

import css from './HomePage.module.css';
import {ThemeContext} from "../../hoc";

const HomePage: FC = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={css.HomePage} id={theme}>
        </div>
    );
};

export {
    HomePage
};
