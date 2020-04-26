import React from 'react';
import dateFormat from 'dateformat';

const now = new Date();

const WeatherDetailsCard = (props) => {
	return(
		<div className="mw5 center bg-lightest-blue br3 pa3 pa4-ns mv3 ba b--black-10">
		  <div className="tc">
		    <img 
		    	src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
		    	className="br-100 h4 w4 dib ba b--black-05 pa2" 
		    	title="weather icon" 
		    	alt='eather icon'
		    />
		  </div>
		  <div>
		  	<div>
					<span className='f2 mb2'>{props.city}</span>
				</div>
				<div>
					<span className='f3 mb2'>{Math.round(props.data.temperature)} °C</span>
				</div>
				<div>
					<span className="f5 fw4 gray mt0">{props.data.description}</span>
				</div>
				<br/>
				<div className="i f6">
					{dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
				</div>
			</div>
		</div>
	);
}

export default WeatherDetailsCard;


