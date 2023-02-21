import React, {FC} from "react";
import {faFacebook, faTwitter, faTelegram, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import css from './Footer.module.css';

const Footer:FC = () => {

    return (
        <div className={css.Footer}>
            <a href="https://www.facebook.com" target={"_blank"}><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="https://twitter.com" target={"_blank"}><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="https://telegram.com" target={"_blank"}><FontAwesomeIcon icon={faTelegram}/></a>
            <a href="https://www.instagram.com" target={"_blank"}><FontAwesomeIcon icon={faInstagram}/></a>
        </div>
    );
};

export {
    Footer
};
