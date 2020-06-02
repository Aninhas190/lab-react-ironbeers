import React from 'react';

import SingleBeer from './../SingleBeer';

const FullInfoBeer = (props) => {
  const beer = props.beer;
  return (
    <div>
      <SingleBeer beer={beer} />
    </div>
  );
};

export default FullInfoBeer;
