import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import InitialPage from './components/InitialPage/InitialPage.jsx';
import Search from './components/Search/Search.jsx';
import Post from './components/Post/Post.jsx';
import Login from './components/Login/Login.jsx';
import NewPost from './components/NewPost/NewPost.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Update from './components/Update/Update.jsx';
import Edit from './components/Edit/Edit.jsx';
import Archives from './components/Archives/Archives.jsx';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={InitialPage} />
                <Route path="/search" component={Search} />
                <Route path="/post" component={Post} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/new" component={NewPost} />
                <PrivateRoute path="/update" component={Update} />
                <PrivateRoute path="/edit" component={Edit} />
                <PrivateRoute path="/archives" component={Archives} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;