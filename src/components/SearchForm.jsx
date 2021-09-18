import React from 'react';

import '../styles/SearchForm.css';

const SearchForm = ( {setCountryName, handleFetchCountryData} ) => {
    return(
        <form onSubmit={ (event) => handleFetchCountryData(event)}>
            <input 
                type="text"
                placeholder="Enter a country name"
                required="required"
                onChange={ (event) => {setCountryName(event.target.value)}} />
            <button 
                type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchForm;