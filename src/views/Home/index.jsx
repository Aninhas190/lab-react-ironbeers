import React from 'react'

import './index.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <img src="./images/beer1.jpg" alt="colection of beers"/>
      <Link to="/beers">All Beers</Link>
      <img src="./images/beer2.jpg" alt="beer from source" />

      <Link to="/random">Random Beer</Link>
      <img src="./images/beer3.jpg" alt="superbock bottle at the beach" />

      <Link to="/new">New Beer</Link>
    </div>
  )
}

export default Home;