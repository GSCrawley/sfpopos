import React from 'react';
import './index.css';
import App from './components/App';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import POPOSList from './components/POPOSList/POPOSList';
import POPOSDetails from './components/POPOSDetails/POPOSDetails'
import * as ReactDOMClient from 'react-dom/client';                                                                


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
      </Route>
    </Routes>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
