import * as React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {Sidebar, SidebarChildProps} from './components/Sidebar'
import {Settings} from './components/Settings';
import {Profiles} from './components/Profiles';
import {LocalIcon} from './utility/Icon';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import logo from '../resources/proton_r2.png'

// eslint-disable-next-line react/prefer-stateless-function
export class Wrapper extends React.Component<any, any> {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/settings" component={Settings}/>
                    {/* <Route exact path="/profiles/:id/settings" render={() => <p>Profile Settings</p>} /> */}
                    <Route path="/" render={() => (
                        <div className="wrapper">
                            <Sidebar header={SBHeader} footer={SBHeader}>

                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                                <p>Testy test test test</p>
                            </Sidebar>
                            <div className="content">
                                <Route exact path="/" render={() => <Redirect to="/profiles"/>}/>
                                <Route exact path="/profiles" component={Profiles}/>
                                <Route exact path="/accounts" render={() => <p>Accounts</p>}/>

                                <Route exact path="/curse" render={() => <p>Curse Browser</p>}/>
                                <Route exact path="/ftb" render={() => <p>FTB Browser</p>}/>
                                <Route exact path="/create" render={() => <p>Create Custom Profile</p>}/>
                            </div>
                        </div>
                    )}/>
                </Switch>
            </Router>
        )
    }
}

const SBHeader = (props: SidebarChildProps) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
    <div role="button" onClick={_ => props.sbToggleOpen()}>
        <img src={logo} alt="Proton Launcher" width={40} />
        <button className="hide-on-close">Toggle</button>
        <LocalIcon type="test1" />
    </div>
)