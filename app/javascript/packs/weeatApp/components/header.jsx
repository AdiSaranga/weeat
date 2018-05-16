import React from 'react';

class Header extends React.Component {
  render() {
    return (<div className="container header">
      <div className="row">
        <div className="col-lg-12"><h1>WeEat</h1><h1>Eat what you love</h1><h3 /></div>
      </div>
      <div className="row spacing">
        <div className="col-lg-3"/>
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Find a restaurant" name="search"/>
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit">
                <i className="glyphicon glyphicon-search"/>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3"/>
      </div>
    </div>);
  }
}

export default Header;

