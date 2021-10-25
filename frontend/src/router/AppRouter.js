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

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};
