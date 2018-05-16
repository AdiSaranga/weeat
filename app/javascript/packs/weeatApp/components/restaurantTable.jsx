import React from 'react';
import Restaurant from './restaurants';
import Map from './map';


class RestaurantTable extends React.Component {
  render() {
    return (
      <div className="row container">
        <div className="col-lg-6"> <Restaurant restaurants={this.props.restaurants} /> </div>
        <div className="col-lg-6"> <Map/> </div>
      </div>
    );
  }
}

export default RestaurantTable;
