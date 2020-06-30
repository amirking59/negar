import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";

export const CalendarListItem = props => {
    const dis = Math.floor((props.event.at - moment().startOf("day").valueOf()) / (1000 * 60 * 60 * 24));
    return (
        <div className={"calendar__item"} >
            <Link className={"calendar__link"} to={`/edit/${props.event.id}`}>{props.event.title}</Link>
            <span className={"calendar__date-left"}>{dis < 0 ? -dis + " days ago!" : dis === 0 ? "Today!" : dis + " days left!"}</span>
        </div>
    )
};