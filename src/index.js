import React from 'react';
import ReactDOM from 'react-dom';

import "./styles/main.scss";

import App from './App';
import AddPage from "./components/page/AddPage";
import NotFoundPage from "./components/page/NotFoundPage";
import HeaderPage from "./components/page/HeaderPage";
import EditPage from "./components/page/EditPage";
import "./firebase/firebase";


import { startSetEvent } from "./store/actions/calendar";
import {Provider} from "react-redux";
import configStore from "./store/configStore";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const store = configStore;

ReactDOM.render(
    <p>Loading!</p>,
    document.getElementById('root')
);

store.dispatch(startSetEvent()).then(() => {
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
});


