import React from 'react';

const Inputfield = ({ handleChange }) => {
	return (
    <div className='mt2 pa2 br3'>
      <input 
        className='pa3 ba b--black-50 bg-near-white' 
        type='search' 
        placeholder='Enter City'
        onChange={ handleChange }
        value = { handleChange.value }
      />
    </div>
  );
}

export default Inputfield;
