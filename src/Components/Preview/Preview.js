import React from 'react';
import dateFormat from 'dateformat';
import icon from './initialIcon.png';

const now = new Date();

const Preview = () => {
	return(
		<div className="mw5 center bg-lightest-blue br3 pa3 pa4-ns mv3 ba b--black-10">
		  <div className="tc">
		    <img 
		    	src={icon}
		    	className="br-100 h4 w4 dib ba b--black-05 pa2" 
		    	title="weather icon" 
		    	alt='weather icon'
		    />
		  </div>
		  <div>
		  	<div>
					<span className='f2 mb2'>City</span>
				</div>
				<div>
					<span className='f3 mb2'>Temperature °C</span>
				</div>
				<div>
					<span className="f5 fw4 gray mt0">Description available when a city is set</span>
				</div>
				<br/>
				<div className="i f6">
					{dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
				</div>
			</div>
		</div>
	);
}

export default Preview;