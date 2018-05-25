import React from 'react';
import Header from './header';
import FilterBar from './filterBar';
import RestaurantTable from './restaurantTable';
import AddRestaurant from './addRestaurant';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      cuisines: [],
      cuisinesById: [],
      nameFilter: '',
      cuisineFilter: '0',
      ratingFilter: 0,
      deliveryTimeFilter: 0,
    };
  }

  componentDidMount() {
    $.getJSON('/restaurants.json', (response) => {
      this.setState({ restaurants: response });
    });

    $.getJSON('/cuisines.json', (response) => {
      const cuisinesList = [];
      const cuisinesMap = {};
      response.forEach((val) => {
        cuisinesList.push(val.name);
        cuisinesMap[val.id] = val.name;
      });

      this.setState({ cuisines: cuisinesList });
      this.setState({ cuisinesById: cuisinesMap });
    });
  }

  handleRestaurantNameFilterChange = (restaurantName) => this.setState({ nameFilter: restaurantName });

  handleCuisineFilterChange = (cuisineName) => this.setState({ cuisineFilter: cuisineName });

  handleRatingFilterChange = (rating) => this.setState({ ratingFilter: rating });

  handleDeliveryTimeFilterChange = (minutes) => this.setState({ deliveryTimeFilter: minutes });

  render() {
    return (<div>
      <Header
        onRestaurantNameFilterChange={this.handleRestaurantNameFilterChange}
      />
      <FilterBar
        cuisines={this.state.cuisines}
        cuisineFilter={this.state.cuisineFilter}
        ratingFilter={this.state.ratingFilter}
        deliveryTimeFilter={this.state.deliveryTimeFilter}
        onCuisineFilterChange={this.handleCuisineFilterChange}
        onRatingFilterChange={this.handleRatingFilterChange}
        onDeliveryTimeFilterChange={this.handleDeliveryTimeFilterChange}
      />
      <RestaurantTable
        restaurants={this.state.restaurants}
        cuisineIdToName={this.state.cuisinesById}
        nameFilter={this.state.nameFilter}
        cuisineFilter={this.state.cuisineFilter}
        ratingFilter={this.state.ratingFilter}
        deliveryTimeFilter={this.state.deliveryTimeFilter}
      />
      <AddRestaurant/>
    </div>);
  }
}
export default LandingPage;
