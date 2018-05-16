import React from 'react';

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
      <div className="container">
        {rows}
      </div>
    );
  }
}

class RestaurantRow extends React.Component {
  render() {
    const restaurant = this.props.restaurant;

    return (
      <div className="row">
        <div className="col-lg-3"> {restaurant.cuisine}   </div>
        <div className="col-lg-3">  {restaurant.name}     </div>
        <div className="col-lg-3">  Rating: {restaurant.rating} </div>
        <div className="col-lg-3">  {restaurant.tenbis_enabled} </div>
      </div>
    );
  }
}

export default RestaurantTable;

