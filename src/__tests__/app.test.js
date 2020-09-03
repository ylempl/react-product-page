import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../App';

test('renders without crashing!', () => {
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);
})