import * as React from 'react';
import "./Hello.css"

export interface Props {
    name: string;
}

export class Hello extends React.Component<Props, object> {
    getName(): string {
        return this.props.name;
    }

    render() {
        return (
            <div className="hello">
                Hello!!! {this.getName()}
            </div>
        );
    }
}