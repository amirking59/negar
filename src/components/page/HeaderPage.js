import React from "react";
import {Link} from "react-router-dom";

const HeaderPage = props => {
    return (
        <div>
            <Link to={"/"}>
                Home
            </Link>
            <Link to={"/add"}>
                Add event
            </Link>
        </div>
    )
};

export default HeaderPage;