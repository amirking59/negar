import React, {useState} from "react";
import {connect} from "react-redux";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from "react-dates";
import moment from "moment";
import {startEditEvent, startRemoveEvent} from "../../store/actions/calendar";


const EditPage = props => {
    const [text, setText] = useState(props.event.title);
    const [note, setNote] = useState(props.event.note);
    const [focus, setFocus] = useState(false);
    const [date, setDate] = useState(moment(props.event.at));
    return (
        <div>
            <div>
                <h1>edit event</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if(text) {
                        props.startEditEvent(props.event.id, {
                            title: text,
                            at: moment(date).valueOf(),
                            note: note
                        });
                        props.history.push("/");
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
                        Save changes!
                    </button>
                </form>
                <button onClick={(e) => {
                    props.removeEvent(props.event.id);
                    props.history.push("/");
                }}>
                    Remove event
                </button>
            </div>

        </div>
    )
};

const mapStateToProps = (state, props) => ({
   event: state.calendar.find((event) => event.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
    startEditEvent: (id, {title, at, note}) => dispatch(startEditEvent(id,{title, at, note})),
    removeEvent: (id) => dispatch(startRemoveEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);