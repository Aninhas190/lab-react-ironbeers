import React, { Component } from 'react';

//api info
import { singleBeer } from './../../services/beersApi';

import Header from './../../components/Header';
import FullInfoBeer from './../../components/FullInfoBeer';

class SingleBeer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props.match.params.id;
    singleBeer(id)
    .then((beer) => {
      this.setState({
        beer
      })
    })
    .catch(error => console.log(error))
  }


  render () {
    const beer = this.state.beer;
    return (
      <div>
        <Header />
        <FullInfoBeer beer={beer} />        
      </div>
    );
  }

}

export default SingleBeer;
