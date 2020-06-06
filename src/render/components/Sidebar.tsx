// eslint-disable-next-line max-classes-per-file
import * as React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.scss'

interface SidebarProps {
    header?: React.ComponentType<SidebarChildProps> | undefined,
    footer?: React.ComponentType<SidebarChildProps>
}

interface SidebarState {
    open: boolean
}

export class Sidebar extends React.Component<SidebarProps, SidebarState> {
    constructor(props: Readonly<SidebarProps>) {
        super(props);

        this.state = {
            open: true
        }
    }

    private toggle() {
        this.setState({open: !this.state.open})
    }

    render(): JSX.Element {
        const childProps: SidebarChildProps = {
            sbToggleOpen: () => this.toggle(),
            sbIsOpen: this.state.open
        }

        return (
            <div className={`sidebar ${this.state.open && 'open'}`}>
                {this.props.header != null && (
                    <div className="sidebar-header">
                        {React.createElement(this.props.header, childProps)}
                    </div>
                )}
                <div className="sidebar-body">
                    {this.props.children}
                </div>
                {this.props.footer != null && (
                    <div className="sidebar-footer">
                        {React.createElement(this.props.footer, childProps)}
                    </div>
                )}
            </div>
        );
    }
}

export interface SidebarChildProps {
    sbToggleOpen: () => void,
    sbIsOpen: boolean
}

// eslint-disable-next-line react/prefer-stateless-function
export class Entry extends React.Component<any, any> {

}