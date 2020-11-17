import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.flat.imageUrl})`
    };


    return (
      <div className="flat card-trip">
  <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg" />
  <div className="card-trip-infos">
    <div>
      <h2>{this.props.flat.name}</h2>

    </div>
    <h2 className="card-trip-pricing">{this.props.flat.price} {this.props.flat.priceCurrency}</h2>

  </div>
</div>
      );
  }
}

export default Flat;
