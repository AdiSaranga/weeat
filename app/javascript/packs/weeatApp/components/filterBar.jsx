import React from 'react';
import Filter from './filter';

class FilterBar extends React.Component {
  render() {
    // TODO: const cuisineTypes = this.props.cuisineTypes;
    const cuisineTypes = ['Asian', 'Burger', 'Salad', 'Veg'];
    const ratingValues = [0, 1, 2, 3];
    const intervals = [];
    for (let i = 15; i <= 120; i = i + 15) {
      intervals.push(i);
    }

    return (<div className="row filter spacing">
      <div className="col-lg-4"><Filter name="Cuisine" values={cuisineTypes}
        dropdownTitle="Choose your favourite cuisine"/>
      </div>
      <div className="col-lg-4"><Filter name={'Rating'} values={ratingValues} dropdownTitle="How many starts..."/>
      </div>
      <div className="col-lg-4"><Filter name={'Speed'} values={intervals} dropdownTitle="How long will it take"/>
      </div>
    </div>);
  }
}

export default FilterBar;
