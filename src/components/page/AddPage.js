import React, {useState} from "react";
import {connect} from "react-redux";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from "react-dates";
import moment from "moment";
import {addEvent} from "../../store/actions/calendar";

const AddPage = props => {
    const [err, setErr] = useState("");
    const [text, setText] = useState("");
    const [note, setNote] = useState("");
    const [focus, setFocus] = useState(false);
    const [date, setDate] = useState(moment());
    return (
        <div>
            <h1>Add new event</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                if(!text) {
                    setErr("please provide a title");
                } else {
                    setErr("");
                    props.addEvent({
                        title: text,
                        at: date,
                        note: note
                    });
                    props.history.push("/")
                }
            }}>
                <input
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    type="text"
                    placeholder={"title"}
                    autoFocus
                />
                <input
                    value={note}
                    onChange={(e) => {
                        setNote(e.target.value)
                    }}
                    type="text"
                    placeholder={"note(optional)"}
                    autoFocus
                />
                <SingleDatePicker
                    id={"date"}
                    date={date}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                    focused={focus}
                    onFocusChange={({focused}) => {
                        setFocus(focused)
                    }}
                    numberOfMonths={1}
                />


                <button>
                    Add event
                </button>
            </form>
            { err && <p>{err}</p>}
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
   addEvent: ({ title, at, note})  => dispatch(addEvent({ title, at, note}))
});

export default connect(undefined, mapDispatchToProps)(AddPage);