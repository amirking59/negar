import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AddPage from "./components/page/AddPage";
import NotFoundPage from "./components/page/NotFoundPage";
import HeaderPage from "./components/page/HeaderPage";
import EditPage from "./components/page/EditPage";


import {addEvent, editEvent, removeEvent} from "./store/actions/calendar";
import {Provider} from "react-redux";
import configStore from "./store/configStore";
import moment from "moment";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const store = configStore;
const v = addEvent({title: "emtehan", note: "emtehan fizik", at: moment("6/12/2020").valueOf()});
store.dispatch(v);
store.dispatch(addEvent({title: "emtehan" , at: moment().valueOf()}));
store.dispatch(addEvent({title: "emtehan" , at: moment("6/25/2020").valueOf()}));
store.dispatch(editEvent(v.event.id ,{ title: "fuck u"}));

store.subscribe(() => {
    console.log(store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <HeaderPage/>
                <Switch>
                    <Route path={"/"} component={App} exact/>
                    <Route path={"/Add"} component={AddPage}/>
                    <Route path={"/edit/:id"} component={EditPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
