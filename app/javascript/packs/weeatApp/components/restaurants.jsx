import React from 'react';
import tenBis from '../assets/images/tenbis.png';
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
      restaurant.rating = 2;
    let stars = [];
    if (restaurant.rating > 0) {
      Array.from(Array(restaurant.rating)).forEach(function () {
        stars.push('⭐');
      });
    }

    return (<div className="row restaurant">
      <div className="col-lg-1"/>
      <div className="col-lg-2"> <Icon cuisineType={this.props.cuisine_id}/>   </div>
      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-12">
            <span key={restaurant.name + '-' + restaurant.tenbis_enabled}>
              {restaurant.name}&nbsp;&nbsp;
              {restaurant.tenbis_enabled ?
                <img src={tenBis} alt={'10bis'} className="tenbis"/> :
                ''}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 stars"> {stars} </div>
        </div>
      </div>
      <div className="col-lg-5"/>
    </div>);
  }
}

export default Restaurants;

