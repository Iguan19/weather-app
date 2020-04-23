import React from 'react';

import InputField from '../../Elements/InputField/InputField';
import Button from '../../Elements/Button/Button';

const SearchBox = ({ onChangeHandler }) => {
	return(
		<div>
			<InputField 
				handleChange = { onChangeHandler }
				value = { onChangeHandler.value }
			/>
			<Button />
		</div>
	);
}

export default SearchBox;