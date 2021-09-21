import React, { useEffect, useState }  from "react";
import { Fragment } from "react";
import CardList from "./CardList";

// Components
import SearchForm from './SearchForm';
import Spinner from "./Spinner";
import ShowError from './ShowError';

//Styles 
import '../styles/Home.css'

const Home = () => {

    // State
    const [countrysData, setCountrysData] = useState([]);
    const [countryName, setCountryName] = useState("");
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(null);
    const [page, setPage] = useState(1);

    // Variables
    const limitPage = 10;


    //Fetching All Countrys Data
    const handleFetchAllCountryData = async (event) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://restcountries.eu/rest/v2/all`);
            const result = await response.json()
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
        try {
            setIsLoading(true);
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);
            const result = await response.json()
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
        
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
            if (scrollTop + clientHeight >= scrollHeight) {
                // console.log("Botton")
                page <= limitPage && setPage(prevPage => prevPage + 1)
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [page])

    useEffect( () => {
        handleFetchAllCountryData();
    }, [])

    return (
        <Fragment>
                <SearchForm 
                    setCountryName={setCountryName}
                    handleFetchCountryData={handleFetchCountryData}
                    />
                {   isLoading
                    ? <Spinner/>
                    : (error
                        ? <ShowError message='Country'/>
                        : <CardList countrys={countrysData.slice(0, page * 25)} currentPage={page}/>
                    )
                }
        </Fragment>
    )
}

export default Home;