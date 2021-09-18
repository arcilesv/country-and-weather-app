import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route to="/" exact>
              <Home/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
