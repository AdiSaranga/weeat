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
      <span className="restaurant-table"> {rows} </span>
    );
  }
}

class RestaurantRow extends React.Component {
  render() {
    const restaurant = this.props.restaurant;

    return (<div className="row restaurant">
      <div className="col-lg-1"/>
      <div className="col-lg-2"> {restaurant.cuisine}   </div>
      <div className="col-lg-4"><h5> {restaurant.name} </h5></div>
      <div className="col-lg-2"><Rating rating={restaurant.rating}/></div>
      <div className="col-lg-2">  {restaurant.tenbis_enabled ? '10bis' : ''} </div>
      <div className="col-lg-1"/>
    </div>);
  }
}

export default RestaurantTable;

