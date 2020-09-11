import React from 'react';
import './Button.scss';

const Button = (props) => {
	return(
		<div>
  		<button 
  		className="button" 
  		name="searchSubmit" 
      type="submit" 
      position="onForm"
      onClick={ props.handleClick }
  		>
  		Set
			</button>
		</div>
	);
}

export default Button;
