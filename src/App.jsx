import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import ListBeers from './views/ListBeers';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';
import SingleBeer from './views/SingleBeer';




function App() {
  return (
    <div className="App">
      <BrowserRouter>




        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={ListBeers} />
          <Route path="/beers/:id" exact component={SingleBeer} />
          
          <Route path="/random" exact component={RandomBeer} />
          <Route path="/new" exact component={NewBeer} />
          {/* <Route path="/search?q={query}" exact component={ListBeers} /> */}
        </Switch>
      
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
