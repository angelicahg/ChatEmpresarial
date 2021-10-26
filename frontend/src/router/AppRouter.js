<<<<<<< HEAD
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { ChatPage } from "../pages/ChatPage";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />

                    <Route exact path="/" component={ChatPage} />
=======
import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const { auth, verificaToken } = useContext( AuthContext );

    useEffect( () => {
        verificaToken();
    },[verificaToken])


    if ( auth.checking ) {
        return <h1>Espere por favor</h1>
    }


    return (
        <Router>
            <div>
                
                <Switch>
                    {/* <Route path="/auth" component={ AuthRouter } /> */}
                    <PublicRoute isAuthenticated={ auth.logged } path="/auth" component={ AuthRouter } />
                    <PrivateRoute isAuthenticated={ auth.logged } exact path="/" component={ ChatPage } />
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
<<<<<<< HEAD
    );
};
=======
    )
}
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
