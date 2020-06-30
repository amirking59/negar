import React, {useState} from "react";
import {connect} from "react-redux";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from "react-dates";
import moment from "moment";
import {startAddEvent} from "../../store/actions/calendar";

const AddPage = props => {
    const [err, setErr] = useState("");
    const [text, setText] = useState("");
    const [note, setNote] = useState("");
    const [focus, setFocus] = useState(false);
    const [date, setDate] = useState(moment());
    return (
        <div className={"add__wrapper"}>
            <h1 className={"add__title"}>Add new event</h1>
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
                    className={"add__input"}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    type="text"
                    placeholder={"title"}
                    autoFocus
                />
                <input
                    className={"add__input"}
                    value={note}
                    onChange={(e) => {
                        setNote(e.target.value)
                    }}
                    type="text"
                    placeholder={"note(optional)"}
                    autoFocus
                />
                <div className={"add__DatePicker__wrapper"}>
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
                </div>
                <div className={"add__btn__wrapper"}>
                    <button className={"add__btn"}>
                        Add event
                    </button>
                </div>

            </form>
            { err && <p>{err}</p>}
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
   addEvent: ({ title, at, note})  => dispatch(startAddEvent({ title, at, note}))
});

export default connect(undefined, mapDispatchToProps)(AddPage);