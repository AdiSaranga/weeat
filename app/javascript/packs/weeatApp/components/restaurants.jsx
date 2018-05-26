import React from 'react';
import Rating from './rating';
import tenBis from '../assets/images/tenbis.png';


class Restaurants extends React.Component {
  render() {
    const rows = [];
    this.props.restaurants.forEach((restaurant) => {
      rows.push(
        <RestaurantRow key={restaurant.name}
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
      <div className="col-lg-2 cuisine"> {restaurant.cuisine}   </div>
      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-12">
            <span>
              {restaurant.name}&nbsp;&nbsp;
              {restaurant.tenbis_enabled ? <img src={tenBis} alt={'10bis'} className="tenbis"/> : ''}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">Rating: <Rating uniqueKey={restaurant.name} rating={restaurant.rating}/>
          </div>
        </div>
      </div>
      <div className="col-lg-5"/>
    </div>);
  }
}

export default Restaurants;

