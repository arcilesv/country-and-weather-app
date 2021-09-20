import React from 'react';
import {Link, useHistory} from 'react-router-dom';

//Styles
import '../styles/PageNotFound.css';

const PageNotFound = () => {
   const history = useHistory()
   return(
    <div className="error-page">
         <div className="content">
            <h1 className="header">
               404
            </h1>
            <h3>
               Opps! Page not found
            </h3>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            <div className="btns-container">
                <Link to="/"> <button className="btn">Go Home</button> </Link>
                <button className="btn" onClick={() => history.goBack()}>Go Back</button>
            </div>
         </div>
    </div>
  )
}
export default PageNotFound;


