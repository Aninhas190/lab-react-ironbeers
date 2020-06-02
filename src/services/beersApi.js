import axios from 'axios';

const beerList = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        resolve(result.data);
      })
      .catch(error => reject(error));
  })
}


export default beerList;