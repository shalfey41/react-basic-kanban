import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
// import connect from '@vkontakte/vk-connect';
import * as backend from "./actions";
import App from './components/App/App';

// Init VK  Mini App
// connect.send('VKWebAppInit');

backend.initialize();

ReactDOM.render(<App />, document.getElementById('root'));
