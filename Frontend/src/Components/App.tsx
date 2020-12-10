import React from 'react';
import LandingPage from '../Pages/LandingPage';
import BrowsePage from '../Pages/BrowsePage';
import MoviePage from '../Pages/MoviePage';
import { Switch, Route } from 'react-router-dom';
import '../Style/App.css';
import LoginPage from "../Pages/LoginPage";

function App() {
  return (
      <main className="mainBody">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/browse" component={BrowsePage} />
          <Route path="/movie/:movieId" component={MoviePage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </main>
  );
}

export default App;
