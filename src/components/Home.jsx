import React, { useEffect, useState }  from "react";
import { Fragment } from "react";
import CardList from "./CardList";

import SearchForm from './SearchForm';
import Spinner from "./Spinner";

const Home = () => {

    // State
    const [countrysData, setCountrysData] = useState([]);
    const [countryName, setCountryName] = useState("");
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(null);
    let [page, setPage] = useState(1);

    // Variables
    const limitPage = 10;


    //Fetching All Countrys Data
    const handleFetchAllCountryData = async (event) => {
        console.log('fetching...')
        try {
            setIsLoading(true);
            const response = await fetch(`https://restcountries.eu/rest/v2/all`);
            const result = await response.json()
            console.log(result);
            if(result.status) {
                setError(result.message);
                setCountrysData([]);
            } else {
                setCountrysData(result);
                setError(false)
            }
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }

    //Fetching Single Country Data
    const handleFetchCountryData = async (event) => {
        event.preventDefault();
        console.log('fetching...')
        try {
            setIsLoading(true);
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);
            const result = await response.json()
            console.log(result);
            if(result.status) {
                setError(result.message);
                setCountrysData([]);
            } else {
                setCountrysData(result);
                setError(false)
            }
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }



    useEffect( () => {
        handleFetchAllCountryData();

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
            if (scrollTop + clientHeight >= scrollHeight) {
                console.log("Botton")
                page <= limitPage && setPage(prevPage => prevPage + 1)
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <Fragment>
                <SearchForm 
                    setCountryName={setCountryName}
                    handleFetchCountryData={handleFetchCountryData}
                    />
                {   isLoading
                    ? <Spinner/>
                    : <CardList countrys={countrysData.slice(0, page * 25)} currentPage={page}/>
                }
        </Fragment>
    )
}

export default Home;