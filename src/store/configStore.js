import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

// Calendar reducer
const calendarDefaultState = [];
const calendarReducer = (state = calendarDefaultState, action) => {
    switch (action.type) {
        case "ADD_EVENT":
            return [
                ...state,
                action.event
            ];
        case "REMOVE_EVENT":
            return state.filter((e) => e.id !== action.id);
        case "EDIT_EVENT":
            return state.map((e) => {
                if(e.id === action.id) {
                    return {
                        ...e,
                        ...action.changes
                    };
                } else {
                    return e;
                }
            });
        case "SET_EVENT":
            return action.events;
        default:
            return state;
    }
};

// Filter reducer
const filterDefaultState = {
    text: "",
    startDate: null,
    endDate: null
};
const filterReducer = (state = filterDefaultState, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// root reducer
export default createStore(combineReducers({
    calendar: calendarReducer,
    filter: filterReducer
    }),
    applyMiddleware(thunk)
);
