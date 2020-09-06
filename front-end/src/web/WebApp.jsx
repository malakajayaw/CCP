import React from 'react';
import './App.css';
import NavBar from './components/Common/NavBar';
import Footer from './components/Common/Footer';
import Home from './components/Events/Home';
import Carousel from './components/Events/Carousel';

function App() {
  return ( <div>
     { <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet"></link>}
    <NavBar/>
    <Carousel />
    <Footer />
  </div> 
  );
}

export default App;
