import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Home from './components/Home';
import DetailsCountry from "./components/DetailsCountry";
import Weather from "./components/Weather";
import PageNotFound from "./components/PageNotFound";

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/country/:name" exact>
            <DetailsCountry/>
          </Route>
          <Route path="/weather/:capital" exact>
            <Weather/>
          </Route>
          <Route>
            <PageNotFound/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
