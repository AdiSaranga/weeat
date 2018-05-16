import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div className="row container filter spacing">

        <div className="row">
          <div className="col-lg-3"><h5>Cuisine</h5></div>
          <div className="col-lg-1"/>
          <div className="col-lg-3"><h5>Rating</h5></div>
          <div className="col-lg-1"/>
          <div className="col-lg-3"><h5>When do you want to eat</h5></div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div className="dropdown">
              <button className="btn dropdown-style" type="button" data-toggle="dropdown">
                  Hamburger, Asian, Salad...
                <span className="caret" />
              </button>
              <ul className="dropdown-menu dropdown-menu-style">
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-1"/>
          <div className="col-lg-3">
            <div className="dropdown">
              <button className="btn dropdown-style" type="button" data-toggle="dropdown">How many stars
                <span className="caret" />
              </button>
              <ul className="dropdown-menu dropdown-menu-style">
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-1"/>
          <div className="col-lg-3">
            <div className="dropdown">
              <button className="btn dropdown-style" type="button" data-toggle="dropdown">Speed
                <span className="caret" />
              </button>
              <ul className="dropdown-menu dropdown-menu-style">
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
