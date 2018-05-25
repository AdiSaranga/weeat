import React from 'react';
import RestaurantRow from './restaurantRow';

function Restaurants(props) {
  const rows = [];

  props.restaurants.forEach((restaurant) => {
    if (props.nameFilter && restaurant.name.toLowerCase().indexOf(props.nameFilter.toLowerCase()) <= -1) {
      return;
    }
    if (props.cuisineFilter !== '0' &&
        props.cuisineIdToName[restaurant.cuisine_id].toLowerCase() !== props.cuisineFilter.toLowerCase()) {
      return;
    }
    if (restaurant.rating < props.ratingFilter) {
      return;
    }
    if (props.deliveryTimeFilter !== 0 && restaurant.last_delivery_time > props.deliveryTimeFilter) {
      return;
    }
    rows.push(
      <RestaurantRow key={restaurant.name}
        restaurant={restaurant} cuisine_id={props.cuisineIdToName[restaurant.cuisine_id]}/>
    );
  });

  return (

    <span className="restaurant-table"> {rows} </span>
  );
}

export default Restaurants;

