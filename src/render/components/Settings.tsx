import * as React from 'react';
import './Settings.scss'

import { RouteComponentProps } from 'react-router-dom';

type SettingsProps = RouteComponentProps<any>

// eslint-disable-next-line react/prefer-stateless-function
export class Settings extends React.Component<SettingsProps, any> {
    public render(): JSX.Element {
        return (
            <div>
                Settings!
            </div>
        );
    }
}
