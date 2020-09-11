import React from 'react';
import dateFormat from 'dateformat';
import './WeatherDetailsCard.scss';

const now = new Date();

const WeatherDetailsCard = (props) => {
	return(
		<div className="card">
		  <div>
		    <img 
		    	src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
		    	className="image" 
		    	title="weather icon" 
		    	alt='Icon not available'
		    />
		  </div>
		  <div>
		  	<div>
					<span className='city'>{props.city}</span>
				</div>
				<div>
					<span className='temperature'>{Math.round(props.data.temperature)} °C</span>
				</div>
				<div>
					<span className="description">{props.data.description}</span>
				</div>
				<br/>
				<div className="date">
					{dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
				</div>
			</div>
		</div>
	);
}

export default WeatherDetailsCard;