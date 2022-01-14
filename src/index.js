import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWeb from './AppWeb';
import AppMob from './AppMob';
import reportWebVitals from './reportWebVitals';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



ReactDOM.render(
  <React.StrictMode>
    <BrowserView>
      <AppWeb />
    </BrowserView>
    <MobileView>
      <AppMob />
    </MobileView>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
