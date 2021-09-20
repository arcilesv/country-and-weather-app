import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import '../styles/DetailsCountry.css';
import ShowError from './ShowError';
import { Fragment } from 'react';

const DetailsCountry = () => {
    const {name} = useParams();
    const [singleCountry, setSingleCountry] = useState(null);
    const [error, setError] = useState(false);

    const FetchSingleCountryData = async () => {
        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
            const result = await response.json()
            console.log(result);
            if(result.status) {
                setSingleCountry(null);
                setError(true);
            } else {
                setSingleCountry(result);
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect( () => {
        FetchSingleCountryData();
    },[])

    return(
        error 
        ? <ShowError message='Country'/>
        : (
            singleCountry && (
                <Fragment>
            <div className="contry-details-container">
                <div className="country-details">
                    <img src={singleCountry[0].flag} alt={singleCountry[0].name} />
                    <h1>{singleCountry[0].name}</h1>
                    <p className="details"><span>Population: </span>{singleCountry[0].population.toLocaleString('en')}</p>
                    <p className="details"><span>Area: </span>{singleCountry[0].area.toLocaleString('en')}</p>
                    <p className="details"><span>Region:</span> {singleCountry[0].region} </p>
                    <p className="details"><span>SubRegion:</span> {singleCountry[0].subregion} </p>
                    <p className="details"><span>Capital:</span> {singleCountry[0].capital} </p>
                </div>
            </div>
            <div className="btns-container">
                <Link to="/"> <button className="btn">Go Home</button> </Link>
                <Link to={`/weather/${singleCountry[0].capital}`} > <button className="btn">Weather</button> </Link>
            </div>
                </Fragment>
            )
        )
    )
}

export default DetailsCountry;