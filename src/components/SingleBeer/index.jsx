import React from 'react';

import { Link } from 'react-router-dom';

import './index.css';

const SingleBeer = (props) => {
  const beer = props.beer;
  const creator = beer.contributed_by.split(' ');
  return (
    <div className="single">
      <Link to={`/beers/${beer._id}`}>
        <img src={beer.image_url} alt={beer.name} />
      </Link>

      <div className="card">
      <Link to={`/beers/${beer._id}`}>
        <h2>{beer.name}</h2>
      </Link>  
        <p>
          <em>{beer.tagline}</em>
        </p>
        <p>
          <strong>Created by: </strong>
          {creator[0] + ' ' + creator[1]}
        </p>
      </div>
    </div>
  );
};

export default SingleBeer;
