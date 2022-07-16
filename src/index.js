import React from 'react';
import './index.css';

import App from './App';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import POPOSList from './POPOSList';
import { createRoot } from 'react-dom/client';                                                                '


const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="list" element={<POPOSList />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </Router>
  </React.StrictMode>,
  // document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
