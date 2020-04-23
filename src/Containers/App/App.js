import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Elements/Card/Card';
//import Logo from '../../Elements/Logo/Logo';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      searchBarInput: '',
      weatherDetails: {
        temperature: '',
        description: ''
      }
    }
  }

  searchBarHandler = (e) => {
    this.setState({ searchBarInput: e.target.value });
  }

  render() {
    let prueba = this.state.searchBarInput;
    return (
      <div className="App">
        <Header />
        <p>{prueba}</p>
        <SearchBox onChangeHandler = { this.searchBarHandler } />
      	<Card />
        <Footer />

      </div>
    );
  } 
}

export default App;
