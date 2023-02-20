import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {HomePage, MovieDetailsPage, MoviesPage, NotFoundPage} from "./pages";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/movie'} element={<MoviesPage/>}/>
                <Route path={'/movie/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
};
