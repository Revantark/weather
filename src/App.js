import React from 'react';
import Weather from './features/weather/weather'
import Navbar from './features/navbar/navbar'
import { Route,Switch,BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar />
      <Switch>
        <Route
        exact
        path="/"
        ><Weather/></Route>
        <Route
        exact
        path="/city/:name"
        ><Weather/></Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
