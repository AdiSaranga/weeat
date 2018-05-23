import React from 'react';
import tenBis from '../assets/images/tenbis.png';
import tenBis1 from '../assets/images/card3.png';
import Icon from './restaurantsIcon';

class Restaurants extends React.Component {
  render() {
    const rows = [];
    this.props.restaurants.forEach((restaurant) => {
      rows.push(
        <RestaurantRow key={restaurant.name}
          restaurant={restaurant} cuisine_id={this.props.cuisineNameToId[restaurant.cuisine_id]}/>
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
    restaurant.rating = Math.floor(Math.random() * 10 % 5) + 1; // TODO - remove
    let stars = [];
    if (restaurant.rating > 0) {
      Array.from(Array(restaurant.rating)).forEach(function () {
        stars.push('⭐');
      });
    }

    return (
      <ul className="flex-container">
        <li className="flex-item flex-item-10"><Icon cuisineType={this.props.cuisine_id}/></li>
        <li className="flex-item flex-item-50">{restaurant.name}</li>
        <li className="flex-item flex-item-10">{restaurant.tenbis_enabled ?
          <img src={tenBis1} alt={'10bis'} className="tenbis"/> :
          ''}</li>
          <li className="flex-item flex-item-20"><span className="stars"> {stars} </span></li>
      </ul>
    );
  }
}

export default Restaurants;

