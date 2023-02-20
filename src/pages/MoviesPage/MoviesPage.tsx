import React, {FC} from "react";

import {Movies} from "../../components";
import {Genres} from "../../components";

const MoviesPage: FC = () => {

    return (
        <div>
            <Genres/>
            <Movies/>
        </div>
    );
};

export {
    MoviesPage
};
