import React from 'react';
import './InputField.scss';

const Inputfield = ({ handleChange }) => {
	return (
    <div className='inputField'>
      <input 
        className='input' 
        type='search' 
        placeholder='Enter City'
        onChange={ handleChange }
        value = { handleChange.value }
      />
    </div>
  );
}

export default Inputfield;
