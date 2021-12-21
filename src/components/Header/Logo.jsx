import React from 'react';

import './header.scss';
import LogoSvg from "../../assets/img/svg/Clover-Logo.svg"

const Logo = () => {
    return(
        <img className="Logo" src={LogoSvg} alt="logo" />
    );
}

export default Logo; 