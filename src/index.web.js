import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from './App/i18n'
import { Provider } from 'react-redux'
import store from './App/Redux/Store'

ReactDom.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </Provider>
    , document.getElementById("root"));