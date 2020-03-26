import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import { getStore } from "./store";
// import connect from '@vkontakte/vk-connect';
import * as backend from "./api";
import * as router from "./router";
import App from './components/App/AppContainer';

// Init VK  Mini App
// connect.send('VKWebAppInit');

const route = router.initialize();
const store = getStore();
backend.initialize();


ReactDOM.render(<App router={route} store={store} />, document.getElementById('root'));
