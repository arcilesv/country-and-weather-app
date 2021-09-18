import React from 'react';

import '../styles/SecondarySpinner.css';

const SecondarySpinner = () => (
    <div className="container">
        <div class="lds-ellipsis">
            <div></div><div></div><div></div><div></div>
        </div>
    </div>
)

export default SecondarySpinner;
