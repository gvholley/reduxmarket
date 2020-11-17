import React, { Component } from 'react';

import Flat from '../components/flat';

class FlatList extends Component {
  static defaultProps = {
    flats: [{
      "name": "Monkey Flat",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg",
      "price": 164,
      "priceCurrency": "EUR"
    }]
  }

  componentWillMount() {
    //Dispatch redux
  }


  render() {
    return (
    <div className="flat-list col-sm-7">
      {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
    </div>
    );
  }
}

export default FlatList;
