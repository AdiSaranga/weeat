import React from 'react';
import Restaurant from './restaurants';
import Map from './map';


class RestaurantTable extends React.Component {
  render() {
    return (
      <div className="row restaurant-table">
        <div className="col-lg-6"> <Restaurant restaurants={this.props.restaurants} cuisineNameToId={this.props.cuisineNameToId} /> </div>
        <div className="col-lg-6"> <Map/> </div>
      </div>
    );
  }
}

export default RestaurantTable;
