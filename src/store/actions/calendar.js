import {v4} from "uuid";
import moment from "moment";

// CALENDAR ACTIONS
export const addEvent = ({title, note = "", at} = {}) => ({
    type: "ADD_EVENT",
    event: {
        id: v4(),
        title,
        note,
        at: moment(at).startOf('day').valueOf()
    }
});

export const removeEvent = (id) => ({
    type: "REMOVE_EVENT",
    id
});

export const editEvent = (id, changes) => ({
   type: "EDIT_EVENT",
    id,
   changes
});