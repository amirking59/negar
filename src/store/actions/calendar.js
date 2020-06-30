import database from "../../firebase/firebase";

// CALENDAR ACTIONS

// Add
export const addEvent = (event) => ({
    type: "ADD_EVENT",
    event
});
export const startAddEvent = (calendar = {}) => {
    return (dispatch) => {
        const {
            title = "",
            note = "",
            at = 0
        } = calendar;
        const event = {
            title,
            note,
            at
        };
        database.ref("events")
            .push(event)
            .then((ref) => {
                dispatch(addEvent({
                    id: ref.key,
                    title,
                    note,
                    at
                }))
            })
    };
};

// Remove
export const removeEvent = (id) => ({
    type: "REMOVE_EVENT",
    id
});
export const startRemoveEvent = (id) => {
    return (dispatch) => {
        return database.ref(`events/${id}`)
            .remove()
            .then(() => {
                dispatch(removeEvent(id))
            })
    }
};

// Edit
export const editEvent = (id, changes) => ({
    type: "EDIT_EVENT",
    id,
    changes
});
export const startEditEvent = (id, changes) => {
    return (dispatch) => {
        return database.ref(`events/${id}`)
            .update(changes)
            .then(() => {
                dispatch(editEvent(id, changes))
            })
    }
};

// Set
export const setEvent = (events) => ({
    type: "SET_EVENT",
    events
});
export const startSetEvent = () => {
    return (dispatch) => {
        return database.ref("events")
            .once("value")
            .then((snapshot) => {
                const events = [];

                snapshot.forEach((childSnapshot) => {
                    events.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                dispatch(setEvent(events));
            })
    }
};