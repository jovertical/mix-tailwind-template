import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from '@/App.tsx';

const el = document.querySelector('#app');

if (el) {
    ReactDOM.render(React.createElement(App), el);
}
