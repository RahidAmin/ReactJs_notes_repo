import React from 'react';
import { multiplecation } from '../Utilities/calculate';

const Shoes = () => {
    const f=4;
    const s=6;
    const mult=multiplecation(f,s);
    return (
        <div>
           <h3>This is shoe component..</h3>
           <p>Multiplecation:{mult}</p>
        </div>
    );
};

export default Shoes;