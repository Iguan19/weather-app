import React from 'react';
import dateFormat from 'dateformat';

const now = new Date();

const MyDate = () => {
	return(
		<div className="i f6">
			{dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
		</div>
	);
}

export default MyDate;