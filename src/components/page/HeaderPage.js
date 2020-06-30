import React from "react";
import {Link, Redirect} from "react-router-dom";


const HeaderPage = props => {
    return (
        <div>
            <h1 className={"header__title"}>NEGAR</h1>
            <div className={"header__link__wrapper"}>
                <Link className={"header__link"} to={"/"}>
                    Home
                </Link>
                <Link className={"header__link"} to={"/add"}>
                    Add event
                </Link>
            </div>

        </div>
    )
};

export default HeaderPage;