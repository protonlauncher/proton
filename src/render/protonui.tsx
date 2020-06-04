import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styling/colors.css'

import { Wrapper } from './Wrapper';
import { Hello } from './Hello';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const roboto = document.createElement("link");
roboto.setAttribute("href", "https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap");
roboto.setAttribute("rel", "stylesheet");
document.head.appendChild(roboto);

// Render Components
ReactDOM.render(<Wrapper />, mainElement);