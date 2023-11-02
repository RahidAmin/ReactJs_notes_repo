import React from 'react';
import DeviceDetails from '../Device-Details/DeviceDetails';

const Device = (props) => {
    console.log(props);
    
    return (
        <div>
            <h3>This is Device:{props.name},Price:{props.price}</h3>
            <DeviceDetails></DeviceDetails>

        </div>
    );
};

export default Device;