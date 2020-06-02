import React from 'react';

import SingleBeer from './../SingleBeer';

const FullInfoBeer = (props) => {
  const beer = props.beer;
  return (
    <div>
      <div>
        <img src={beer.image_url} alt={beer.name} />

        <div>
          <h2>{beer.name}</h2>

          <p>
            <em>{beer.tagline}</em>
          </p>
          <p>
            {beer.first_brewed}
          </p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>
            <strong>Created by: {beer.contributed_by} </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullInfoBeer;
