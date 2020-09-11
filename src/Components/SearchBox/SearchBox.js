import React from 'react';

import InputField from '../../Elements/InputField/InputField';
import Button from '../../Elements/Button/Button';
import './SearchBox.scss';

const SearchBox = (props) => {
	return(
		<div className="searchbox">
			<InputField 
				handleChange = { props.onChangeHandler }
				value = { props.onChangeHandler.value }
			/>
			<Button 
				handleClick = { props.onClickHandler }
			/>
		</div>
	);
}

export default SearchBox;