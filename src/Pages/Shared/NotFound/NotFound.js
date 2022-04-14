import React from 'react';
import nofound from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img src={nofound} alt="" />
        </div>
    );
};

export default NotFound;