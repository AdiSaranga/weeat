import React from 'react';
import Rating from './rating';

class RestaurantTable extends React.Component {
  render() {
    const rows = [];
    this.props.restaurants.forEach((restaurant) => {
      rows.push(
        <RestaurantRow
          restaurant={restaurant} />
      );
    });

    return (
      <span>{ rows } </span>
    );
  }
}

class RestaurantRow extends React.Component {
  render() {
    const restaurant = this.props.restaurant;

    return (
      <div className="row restaurant">
        <div className="col-lg-3"> {restaurant.cuisine}   </div>
        <div className="col-lg-3"> <h5> {restaurant.name} </h5>    </div>
        <div className="col-lg-3">  <Rating rating={restaurant.rating}/> </div>
        <div className="col-lg-3">  {restaurant.tenbis_enabled ? '10bis' : ''} </div>
      </div>
    );
  }
}

export default RestaurantTable;

