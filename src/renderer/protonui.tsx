import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './Hello';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render Components
ReactDOM.render(
    <Hello name="person" />,
    mainElement
);