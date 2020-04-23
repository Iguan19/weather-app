import React from 'react';
import WeatherDetails from '../../Components/WeatherDetails/WeatherDetails';
//import Icon from '../Icon/Icon';

const Card = () => {
  return(
    <div className="mw5 center bg-lightest-blue br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img src="http://openweathermap.org/img/wn/10d@2x.png" className="br-100 h4 w4 dib ba b--black-05 pa2" title="weather icon" alt='eather icon'/>
        <WeatherDetails />
      </div>
    </div>
  );
}

export default Card;