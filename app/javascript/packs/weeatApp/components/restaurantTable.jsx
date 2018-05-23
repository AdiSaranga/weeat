import React from 'react';
import Restaurant from './restaurants';
import Map from './map';


function RestaurantTable(props) {
  return (
    <div className="row restaurant-table">
      <div className="col-lg-6">
        <Restaurant restaurants={props.restaurants} cuisineNameToId={props.cuisineNameToId} />
      </div>
      <div className="col-lg-6"> <Map/> </div>
    </div>
  );
}

export default RestaurantTable;
