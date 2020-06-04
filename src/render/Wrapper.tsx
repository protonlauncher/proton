import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Settings } from "./components/Settings";

// eslint-disable-next-line react/prefer-stateless-function
export class Wrapper extends React.Component<any, any> {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/settings" component={Settings} />
                    {/* <Route exact path="/profiles/:id/settings" render={() => <p>Profile Settings</p>} /> */}
                    <Route path="/" render={() => (
                        <div>
                            {/* sidebar */}
                            <Route exact path="/" render={() => <Redirect to="/profiles" />} />
                            <Route exact path="/profiles" render={() => <p>Profiles</p>} />
                            <Route exact path="/accounts" render={() => <p>Accounts</p>} />

                            <Route exact path="/curse" render={() => <p>Curse Browser</p>} />
                            <Route exact path="/ftb" render={() => <p>FTB Browser</p>} />
                            <Route exact path="/create" render={() => <p>Create Custom Profile</p>} />
                        </div>
                    )} />
                </Switch>
            </Router>
        )
    }
}