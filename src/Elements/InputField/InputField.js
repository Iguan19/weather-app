import React from 'react';

const Inputfield = ({ handleChange }) => {
	return (
    <div className='mt2 pa2'>
      <input 
        className='pa3 ba b--light-blue bg-lightest-blue' 
        type='search' 
        placeholder='Enter City'
        onChange={ handleChange }
        value = { handleChange.value }
      />
    </div>
  );
}

export default Inputfield;
