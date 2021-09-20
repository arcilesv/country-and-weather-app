import React from 'react';
import { Link, useHistory } from 'react-router-dom';

//Styles
import '../styles/ShowError.css';

const ShowError = ({message}) => {
    const history = useHistory();
    return (
        <div className="error-page">
            <div className="content">
                <h1 className="header">Error!!</h1>
                <h2>{`${message} Not Found. Try Again`}</h2>
                <div className="btns-container">
                    <Link to="/"> <button className="btn">Go Home</button> </Link>
                    <button className="btn" onClick={() => history.goBack()}>Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default ShowError;