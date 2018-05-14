import React from 'react';
import RestaurantTable from './restaurants';

class LandingPage extends React.Component {
  render() {
    const RESTAURANTS = [
      { name: 'Giraff', cuisine: 'Assian', tenbis_enabled: true, rating: '1' },
      { name: 'Agadir', cuisine: 'Burger', tenbis_enabled: true, rating: '2' },
      { name: 'Breadly', cuisine: 'Salad', tenbis_enabled: false, rating: '3' },
      { name: 'BBB', cuisine: 'Burger', tenbis_enabled: true, rating: '4' },
      { name: 'Salad', cuisine: 'Salad', tenbis_enabled: false, rating: '4' },
      { name: 'Little Italy', cuisine: 'Italian', tenbis_enabled: true, rating: '0' },
    ];

    return (
      <RestaurantTable restaurants={RESTAURANTS} />
    );
  }
}
export default LandingPage;
