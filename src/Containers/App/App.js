import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Elements/Card/Card';
import Logo from '../../Elements/Logo/Logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox />
      	<Card />
        <Footer />
      </div>
    );
  } 
}

export default App;
