import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createRoot} from 'react-dom/client';
import "./Styles/main.scss";
import ReactGA from 'react-ga';

const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
if (typeof GOOGLE_ANALYTICS_ID === 'string') {
    ReactGA.initialize(GOOGLE_ANALYTICS_ID)
    // ReactGA.set({
    //     customBrowserType: !isMobile ? 'desktop' : 'web3' in window || 'ethereum' in window ? 'mobileWeb3' : 'mobileRegular'
    // })
} else {
    ReactGA.initialize('test', { testMode: true, debug: true })
}

window.addEventListener('error', error => {
    ReactGA.exception({
        description: `${error.message} @ ${error.filename}:${error.lineno}:${error.colno}`,
        fatal: true
    })
})

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
