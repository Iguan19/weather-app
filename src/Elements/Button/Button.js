import React from 'react';

const Button = () => {
	return(
		<div className="ph3">
  		<button 
  		className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" 
  		name="searchSubmit" 
      type="submit" 
      position="onForm"
  		>
  		Search
			</button>
		</div>
	);
}

export default Button;
