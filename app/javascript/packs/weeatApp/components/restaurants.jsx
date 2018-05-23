import React from 'react';
import RestaurantRow from './restaurantRow';

function Restaurants(props) {
  const rows = [];
  props.restaurants.forEach((restaurant) => {
    rows.push(
      <RestaurantRow key={restaurant.name}
        restaurant={restaurant} cuisine_id={props.cuisineNameToId[restaurant.cuisine_id]}/>
    );
  });

  return (
    <span className="restaurant-table"> {rows} </span>
  );
}

export default Restaurants;

