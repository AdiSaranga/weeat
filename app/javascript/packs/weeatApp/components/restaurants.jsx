import React from 'react';
import LandingPage from "./landingPage";

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
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class RestaurantRow extends React.Component {
  render() {
    const restaurant = this.props.restaurant;

    return (
      <tr>
        <td> {restaurant.cuisine} </td> {/*need to change to cuisine image*/}
        <td> {restaurant.name} </td>
        <td> Rating: {restaurant.rating} </td> {/*need to change to stars*/}
        <td> {restaurant.tenbis_enabled} </td> {/*need to change to 10bis icon */}
      </tr>
    );
  }
}

export default RestaurantTable;

