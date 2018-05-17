import React from 'react';
import Filter from './filter';

class FilterBar extends React.Component {
  render() {
    // TODO: const cuisineTypes = this.props.cuisineTypes;
    const cuisineTypes = ['Asian', 'Burger', 'Salad', 'Veg'];
    const ratingValues = [0, 1, 2, 3];
    const intervals = [];
    for (let i = 0; i <= 120; i = i + 15) {
      intervals.push(i);
    }

    return (
      <div className="row container filter spacing">
        <div className="col-lg-4"><Filter name="Cuisine" values={cuisineTypes}/></div>
        <div className="col-lg-4"><Filter name={'Rating'} values={ratingValues}/></div>
        <div className="col-lg-4"><Filter name={'When do you want your food?'} values={intervals}/></div>
      </div>
    );
  }
}

export default FilterBar;
