import React from 'react';
import Header from './header';
import FilterBar from './filterBar';
import RestaurantTable from './restaurantTable';
import AddRestaurant from './addRestaurant';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [], cuisines: [], cuisinesWithId: [] };
  }

  componentDidMount() {
    $.getJSON('/restaurants.json', (response) => {
      this.setState({ restaurants: response });
    });

    $.getJSON('/cuisines.json', (response) => {
      let cuisinesList = [];
      let cuisinesMap = {};
      response.forEach((val) => {
        cuisinesList.push(val.name);
        cuisinesMap[val.id] = val.name;
      });

      this.setState({ cuisines: cuisinesList });
      this.setState({ cuisinesWithId: cuisinesMap });
    });
  }

  render() {
    return (<div>
      <Header/>
      <FilterBar cuisines={this.state.cuisines}/>
      <RestaurantTable restaurants={this.state.restaurants} cuisineNameToId={this.state.cuisinesWithId}/>
      <AddRestaurant/>
    </div>);
  }
}
export default LandingPage;
