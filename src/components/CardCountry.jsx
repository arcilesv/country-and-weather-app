import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/CardCountry.css';

const CardCountry = ( {flag, name, population, region, capital}) => {
    
    return(
        <Link to={`/country/${name}`}>
            <div className="card-container">
                <img src={flag} alt={name} className="flag" />
                <h4 className="country-name">{name}</h4>
                <p className="details"><span>Population: </span>{population.toLocaleString('en')}</p>
                <p className="details"><span>Region:</span> {region} </p>
                <p className="details"><span>Capital:</span> {capital} </p>
            </div>
        </Link>
    )
}

export default CardCountry;