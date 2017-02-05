import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './app/components/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import UserLists from './app/components/UsersList';
import OneUser from './app/components/OneUser';


injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={UserLists} />
                <Route path="open/:login" component={OneUser} />
            </Route>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('app')
);