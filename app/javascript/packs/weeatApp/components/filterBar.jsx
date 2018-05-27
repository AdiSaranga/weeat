import React from 'react';
import Filter from './filter';

class FilterBar extends React.Component {
  render() {
    const ratingValues = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];
    const intervals = [15, 30, 45, 60, 75, 90, 105, 120];

    return (<div className="row filter spacing">
      <div className="col-lg-4"><Filter name="Cuisine" values={this.props.cuisines}
        dropdownTitle="Choose your favourite cuisine  "/>
      </div>
      <div className="col-lg-4"><Filter name={'Rating'} values={ratingValues} dropdownTitle="How many starts  "/>
      </div>
      <div className="col-lg-4"><Filter name={'Speed'} values={intervals} dropdownTitle="How long will it take  "/>
      </div>
    </div>);
  }
}

export default FilterBar;
