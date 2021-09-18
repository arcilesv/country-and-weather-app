import React from 'react';

import CardCountry from './CardCountry';
import SecondarySpinner from './SecondarySpinner';

import '../styles/CardList.css';

const CardList = ( {countrys, currentPage} ) => {
    return(
        <div className="cards-container">
            {countrys.map( country => (
                <CardCountry 
                    flag={country.flag}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    key={country.numericCode}
                />
                )
            )}
            {currentPage <= 10 && <SecondarySpinner/>}
        </div>
    )
}

export default CardList;