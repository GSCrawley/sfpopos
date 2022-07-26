import React from 'react'
import { Outlet } from 'react-router-dom';
import './App.css';
import Title from './Title/Title';




function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
    </div>
  );
}

export default App;