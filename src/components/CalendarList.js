import React from "react";
import {connect} from "react-redux";
import moment from "moment";
import {CalendarListItem} from "./CalendarListItem";


const CalendarList = props => (
    <div>
        {
            props.calendar
                .filter((event) => {
                    const startDateMatch = props.filter.startDate ? moment(event.at).isSameOrBefore(props.filter.startDate) : false;
                    const endDateMatch = props.filter.endDate ? moment(event.at).isSameOrAfter(props.filter.endDate) : false;
                    const text = event.title.toLowerCase().includes(props.filter.text.toLowerCase().trim());
                    return !startDateMatch && !endDateMatch && text;
                })
                .map((event) => <CalendarListItem event={event} key={event.id}/>)
        }
    </div>
);

const mapStateToProps = state => ({
    calendar: state.calendar,
    filter: state.filter
});

export default connect(mapStateToProps)(CalendarList)