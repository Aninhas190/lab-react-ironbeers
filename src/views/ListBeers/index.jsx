import React, { Component } from 'react';
//api info
import { beerList } from './../../services/beersApi';
//components
import Header from './../../components/Header';
import SingleBeer from './../../components/SingleBeer';



class ListBeers extends Component {
  constructor () {
    super();
    this.state = {
      allBeers: []
    }
  }
  
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    beerList()
    .then((allBeers) => {
      this.setState({
        allBeers
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.allBeers.map(beer => {
          return (<SingleBeer key={Math.random() * Date.now()} beer={beer} />)
        })}
      </div>
    )
  }
}

export default ListBeers;
