import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styling/base.scss'

import { Wrapper } from './Wrapper';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Roboto
// todo will fail offline, should load from local file
loadFont("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap")

// Render Components
ReactDOM.render(<Wrapper />, mainElement);

function loadFont(fontUrl: string) {
    const link = document.createElement("link")
    link.setAttribute("href", fontUrl)
    link.setAttribute("rel", "stylesheet");
    document.head.appendChild(link);
}