import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import './Profiles.scss'

type ProfilesProps = RouteComponentProps<any>

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProfilesState {
    test: string
}

export class Profiles extends React.Component<ProfilesProps, ProfilesState> {
    constructor(props: ProfilesProps) {
        super(props);

        this.state = {
            test: "Wow"
        }
    }


    render() {
        return (
            <div>
                <span className="test">Profiles!!</span> {this.state.test}
            </div>
        );
    }
}

