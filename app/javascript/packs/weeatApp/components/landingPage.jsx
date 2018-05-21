import React from 'react';
import Header from './header';
import FilterBar from './filterBar';
import RestaurantTable from './restaurantTable';
import AddRestaurant from './addRestaurant';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [] };
  }

  componentDidMount() {
    $.getJSON('/restaurants.json', (response) => {
      this.setState({ restaurants: response });
    });
  }

  render() {
    // const RESTAURANTS = [
    //   { name: 'Giraff', cuisine: 'A', tenbis_enabled: true, rating: '1' },
    //   { name: 'Agadir', cuisine: 'B', tenbis_enabled: true, rating: '2' },
    //   { name: 'Breadly', cuisine: 'S', tenbis_enabled: false, rating: '3' },
    //   { name: 'BBB', cuisine: 'B', tenbis_enabled: true, rating: '1' },
    //   { name: 'Salad', cuisine: 'S', tenbis_enabled: false, rating: '2' },
    //   { name: 'Little Italy', cuisine: 'I', tenbis_enabled: true, rating: '0' },
    // ];

    return (<div>
      <Header/>
      <FilterBar/>
      <RestaurantTable restaurants={this.state.restaurants}/>
      <AddRestaurant/>
    </div>);
  }
}
export default LandingPage;
