import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components
const render = () => {
    ReactDOM.render(
        <div>Hello, React</div>,
        mainElement
    );
};

render();