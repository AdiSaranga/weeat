import React from 'react';
import tenBis1 from '../assets/images/card3.png';
import Icon from './restaurantsIcon';

function RestaurantRow(props) {
  const restaurant = props.restaurant;
  restaurant.rating = 3;//Math.floor(Math.random() * 10 % 5) + 1; // TODO - remove
  const stars = [];
  if (restaurant.rating > 0) {
    Array.from(Array(restaurant.rating)).forEach(function () {
      stars.push('⭐');
    });
  }

  return (
    <ul className="flex-container">
      <li className="flex-item flex-item-10"><Icon cuisine={props.cuisine}/></li>
      <li className="flex-item flex-item-50">{restaurant.name}</li>
      <li className="flex-item flex-item-10">{restaurant.tenbis_enabled ?
        <img src={tenBis1} alt={'10bis'} className="tenbis"/> :
        ''}</li>
      <li className="flex-item flex-item-20"><span className="stars"> {stars} </span></li>
    </ul>
  );
}

export default RestaurantRow;
