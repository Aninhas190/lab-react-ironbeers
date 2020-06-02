import React from 'react';

//api info
import { singleBeer } from './../../services/beersApi';

import Header from './../../components/Header';
import FullInfoBeer from './../../components/FullInfoBeer';

const SingleBeer = (props) => {
  const beerId = props.match.params.id;
  let oneBeer = {};
 
  singleBeer(beerId).then((beer) => oneBeer = Object.entries(beer)).catch((error) => console.log(error));



  console.log(oneBeer)
  
  return (
    <div>
      <Header />
              
    </div>
  );

}

export default SingleBeer;
