import React, {createContext, FC, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Footer, Header} from "../../components";
import {ThemeContext} from "../../hoc";

const MainLayout: FC = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark',
    );

    const switcher = () => {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, switcher}}>

            <div className={theme === 'dark' ? css.MainLayoutDark : css.MainLayoutLight}>

                <button className={css.MainLayoutSwitcher}
                        onClick={switcher}>{theme === 'dark' ? 'dark' : 'light'}</button>

                <div className={theme === 'dark' ? css.MainLayoutChildrenDark : css.MainLayoutChildren}>
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export {
    MainLayout,
};
