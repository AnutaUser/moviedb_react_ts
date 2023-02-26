import React, {FC, useContext} from "react";
import {faFacebook, faTwitter, faTelegram, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import css from './Footer.module.css';
import {ThemeContext} from "../../hoc";

const Footer:FC = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={css.Footer} id={theme}>
            <a href="https://www.facebook.com" target={"_blank"} rel={"noreferrer"}><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="https://twitter.com" target={"_blank"} rel={"noreferrer"}><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="https://telegram.com" target={"_blank"} rel={"noreferrer"}><FontAwesomeIcon icon={faTelegram}/></a>
            <a href="https://www.instagram.com" target={"_blank"} rel={"noreferrer"}><FontAwesomeIcon icon={faInstagram}/></a>
        </div>
    );
};

export {
    Footer
};
