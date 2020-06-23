import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";

export const CalendarListItem = props => {
    const dis = Math.floor((props.event.at - moment().startOf("day").valueOf()) / (1000 * 60 * 60 * 24));
    return (
        <div>
            <Link to={`/edit/${props.event.id}`}>{props.event.title}</Link>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>{dis < 0 ? -dis + " days ago!" : dis === 0 ? "Today!" : dis + " days left!"}</span>
        </div>
    )
};