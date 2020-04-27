import React from 'react';

const errorNotice = (props) => {
    return(
        <div className=''>
            <h1 className=''>404</h1>
            <div className=''>
                <h2 className=''>Oops!</h2>
                <p className=''>We can't find the city you are looking for</p>
            </div>
        </div>
    );
}

export default errorNotice;