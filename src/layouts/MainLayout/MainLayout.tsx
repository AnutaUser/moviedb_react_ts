import React, {FC} from "react";
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Footer, Header} from "../../components";

const MainLayout: FC = () => {

    return (
        <div className={css.MainLayout}>

            <div className={css.MainLayoutChildren}>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export {
    MainLayout
};
