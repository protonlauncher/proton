import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

export class Wrapper extends React.Component<any, any> {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/settings" render={() => (<p>Hi</p>)} />

                </Switch>
            </Router>
        )
    }
}