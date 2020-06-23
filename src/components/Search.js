import React, {useState} from "react";
import {connect} from "react-redux";
import {setTextFilter, setStartDate, setEndDate} from "../store/actions/filter";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

const Search = props => {
    const [focus, setFocus] = useState(null);
    return (
        <div>
            <DateRangePicker
                startDateId="startDate"
                startDate={props.filter.startDate}
                endDateId={"endDate"}
                endDate={props.filter.endDate}
                onDatesChange={({ startDate, endDate }) => {
                    props.setStartDate(startDate);
                    props.setEndDate(endDate);
                }}
                focusedInput={focus}
                onFocusChange={(focusedInput) => {
                    setFocus(focusedInput)
                }}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
            <button onClick={(e) => {
                props.setStartDate(null);
                props.setEndDate(null);
            }}>
                clear
            </button>
            <input
                type={"text"}
                placeholder={"search..."}
                value={props.filter.text}
                onChange={(e) => {
                    props.setTextFilter(e.target.value);
                }}
            />
        </div>

    )
};

const mapStateToProps = state => ({
   filter: state.filter
});

const mapDispatchToProps = dispatch => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);