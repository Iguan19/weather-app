import React from 'react';
import tachyons from 'tachyons';

import MyDate from './Date/Date';
import Description from './Description/Description';
import Temperature from './Temperature/Temperature';

const WeatherDetails = () => {
	return(
		<div>
			<Temperature />
			<Description />
			<br/>
			<MyDate />
		</div>
	);
}

export default WeatherDetails;


