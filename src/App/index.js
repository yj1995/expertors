import React from 'react';
import ReactDOM from 'react-dom';
import { Parent } from './Parent';

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(
    <Parent />,
    root
);
