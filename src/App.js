import React from 'react'
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
// import GoogleMap from './GoogleMap';
// import { Wrapper } from "@googlemaps/react-wrapper";



function App() {
  return (

    <div className="App">
      {/* <Wrapper apiKey={"YOUR_API_KEY"}> */}
      <Title />
      <POPOSList />
      {/* <GoogleMap /> */}
      <Footer />
      {/* </Wrapper> */}

    </div>
  );
}

export default App;
