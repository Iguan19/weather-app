import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Elements/Card/Card';
//import Logo from '../../Elements/Logo/Logo';
import './App.css';

//const APIKey = "3e0a1ade01bf9f4d59e46fa9515ee8d2";

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

  onSubmit = () => {
    console.log("Click");
    fetch(`api.openweathermap.org/data/2.5/weather?q=london&appid=3e0a1ade01bf9f4d59e46fa9515ee8d2`)
      .then(res => res.json()) 
      .then(data => console.log(data.main.temp)) 
  }

  render() {
    let prueba = this.state.searchBarInput;
    return (
      <div className="App">
        <Header />
        <p>{prueba}</p>
        <SearchBox 
          onChangeHandler = { this.searchBarHandler } 
          onClickHandler = { this.onSubmit }
        />
      	<Card />
        <Footer />
      </div>
    );
  } 
}

export default App;
