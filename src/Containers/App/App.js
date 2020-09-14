import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Footer from '../../Components/Footer/Footer';
import WeatherDetailsCard from '../../Components/WeatherDetailsCard/WeatherDetailsCard';
import ErrorNotice from '../../Components/ErrorNotice/ErrorNotice';
import Preview from '../../Components/Preview/Preview';
import './App.css';

const APIKey = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchBarInput: '',
      weatherDetails: {
        temperature: '',
        description: '??',
        icon: '',
        city: ''
      },
      error: false,
    }
  }

  searchBarHandler = (e) => {
    this.setState({ searchBarInput: e.target.value });
  }

  tryAgainHandler = () => {
    this.setState({
      searchBarInput: '',
      weatherDetails: {
        temperature: '',
        description: '??',
        icon: '',
        city: ''
      },
      error: false
    })
  }

  onSubmit = () => {
    this.setState({
      weatherDetails: {},
      error: false
    });
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchBarInput}&appid=${APIKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        if(data.cod === 200){
          return this.setState({
              weatherDetails: {
                temperature: data.main.temp,
                description: data.weather[0].main,
                icon: data.weather[0].icon,
                city: data.name
              },
            }
          )
        } else {
          throw data.cod;
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
            error: true
        });
      })
  }

  render() {
    let cardContent = <Preview />;
    if (this.state.error) {
      cardContent = <ErrorNotice onClickHandler={this.tryAgainHandler} />;
    } else if (this.state.weatherDetails.temperature && this.state.weatherDetails.description !== '') {
      cardContent = <WeatherDetailsCard data={this.state.weatherDetails} />;
    }

    return (
      <div className="App">
        <Header />
        <SearchBox 
          onChangeHandler = { this.searchBarHandler } 
          onClickHandler = { this.onSubmit }
        />
        {cardContent}
        <Footer />
      </div>
    );
  } 
}

export default App;
