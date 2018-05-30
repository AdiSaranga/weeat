import React from 'react';

function RestaurantIcon(props) {
  const defaultIcon = 'F';
  const icon = props.cuisine ? props.cuisine.icon_id : defaultIcon;

  return (
    <span className="cuisine"> {icon} </span>
  );
}

export default RestaurantIcon;
