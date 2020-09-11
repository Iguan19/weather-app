import React from 'react';
import dateFormat from 'dateformat';
import icon from './initialIcon.png';
import './Preview.scss';

const now = new Date();

const Preview = () => {
	return(
		<div className="card">
		  <div>
		    <img 
		    	src={icon}
		    	className="image" 
		    	title="weather icon" 
		    	alt='weather icon'
		    />
		  </div>
		  <div>
		  	<div>
					<span className='city'>City</span>
				</div>
				<div>
					<span className='temperature'>Temperature °C</span>
				</div>
				<div>
					<span className="description">Description available when a city is set</span>
				</div>
				<br/>
				<div className="date">
					{dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
				</div>
			</div>
		</div>
	);
}

export default Preview;