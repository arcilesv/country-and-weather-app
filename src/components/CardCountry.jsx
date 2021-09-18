import React from 'react';

import '../styles/CardCountry.css';

const CardCountry = ( {flag, name, population, region, capital}) => {
    
    return(
        <div className="card-container">
            <img src={flag} alt={name} className="flag" />
            <h4 className="country-name">{name}</h4>
            <p className="details"><span>Population: </span>{population.toLocaleString('en')}</p>
            <p className="details"><span>Region:</span> {region} </p>
            <p className="details"><span>Capital:</span> {capital} </p>
        </div>
    )
}

export default CardCountry;