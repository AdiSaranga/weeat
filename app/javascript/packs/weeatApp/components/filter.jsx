import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div className="row container">
        <div className="col-lg-4">
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Cuisine
              <span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Rating
              <span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Time To Delivery
              <span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
