import React from 'react';

function FilterBar(props) {
  const ratingValues = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];
  const intervals = [15, 30, 45, 60, 75, 90, 105, 120];

  const cuisineOptionTags = props.cuisines.map(value => (<option key={value} value={value}>{value}</option>));
  const cuisineFilterValue = props.cuisineFilter ? props.cuisineFilter : -1;

  const ratingOptionTags = ratingValues.map(value => (<option key={value.length} value={value.length}>{value}</option>));
  const ratingFilterValue = props.ratingFilter ? props.ratingFilter : 0;

  const deliveryTimeOptionTags = intervals.map(value => (<option key={value} value={value}>{value}</option>));
  const deliveryTimeFilterValue = props.deliveryTimeFilter ? props.deliveryTimeFilter : 0;

  const onCuisineFilterChange = (e) => {
    props.onCuisineFilterChange(e.target.value);
  };

  const onRatingFilterChange = (e) => {
    props.onRatingFilterChange(e.target.value);
  };

  const onDeliveryTimeFilterChange = (e) => {
    props.onDeliveryTimeFilterChange(parseInt(e.target.value));
  };

  return (
    <div className="row filter spacing">
      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-12"><h4>Cuisine</h4></div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <select value={cuisineFilterValue} onChange={onCuisineFilterChange} className="dropdown">
              <option key="0" value="0">Choose your favourite cuisine  </option>
              {cuisineOptionTags}
            </select>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-12"><h4>Rating</h4></div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <select value={ratingFilterValue} onChange={onRatingFilterChange} className="dropdown">
              <option key="0" value="0">How many starts?  </option>
              {ratingOptionTags}
            </select>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-12"><h4>Speed</h4></div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <select value={deliveryTimeFilterValue} onChange={onDeliveryTimeFilterChange} className="dropdown">
              <option key="0" value="0">How long will it take?  </option>
              {deliveryTimeOptionTags}
            </select>
          </div>
        </div>
      </div>

    </div>);
}

export default FilterBar;
