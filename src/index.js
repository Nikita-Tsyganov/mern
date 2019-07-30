import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://c03b6b3f8fea424c8f781da4976f64b3@sentry.io/1516594"});
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();









