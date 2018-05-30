import React from 'react';

function Header(props) {

  const onFilterNameChange = () => {
    props.onRestaurantNameFilterChange(document.getElementById("name_filter").value);
  };

  return (
    <div className="header">
      <div className="row">
        <div className="col-lg-12"><h1>WeEat</h1><h1>Eat what you love</h1><h3/></div>
      </div>
      <div className="row spacing">
        <div className="col-lg-3"/>
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Find a restaurant" name="search" id="name_filter"/>
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit" onClick={onFilterNameChange}>
                <i className="glyphicon glyphicon-search"/>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3"/>
      </div>
    </div>
  );
}

export default Header;

