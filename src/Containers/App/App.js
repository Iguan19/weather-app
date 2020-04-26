import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Footer from '../../Components/Footer/Footer';
import WeatherDetailsCard from '../../Components/WeatherDetailsCard/WeatherDetailsCard';
import './App.css';

const APIKey = "3e0a1ade01bf9f4d59e46fa9515ee8d2";

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchBarInput: 'london',
      weatherDetails: {
        temperature: '',
        description: '',
        icon: ''
      }
    }
  }

  searchBarHandler = (e) => {
    this.setState({ searchBarInput: e.target.value });
  }

  onSubmit = () => {
    console.log("Click");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchBarInput}&appid=${APIKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
      	return this.setState(Object.assign(this.state.weatherDetails, {
      		temperature: data.main.temp,
      		description: data.weather[0].main,
      		icon: data.weather[0].icon
      		}
      	))
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox 
          onChangeHandler = { this.searchBarHandler } 
          onClickHandler = { this.onSubmit }
        />
      	<WeatherDetailsCard data={this.state.weatherDetails} city={this.state.searchBarInput}/>
        <Footer />
      </div>
    );
  } 
}

export default App;
