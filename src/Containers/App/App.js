import React, { Component } from 'react';
import 'typeface-roboto';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          
        <Footer />
      </div>
    );
  } 
}

export default App;
