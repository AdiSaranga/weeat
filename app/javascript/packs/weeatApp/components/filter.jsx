import React from 'react';

class Filter extends React.Component {
  render() {
    const dropdownList = [];
    this.generateLiTag(this.props.values, dropdownList);

    return (<div>
      <div className="row">
        <div className="col-lg-12"><h5>{this.props.name}</h5></div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle dropdown-style" type="button" id={this.props.name}
              data-toggle="dropdown">
              {this.props.dropdownTitle}
              <span className="caret"/>
            </button>
            <ul className="dropdown-menu dropdown-menu-style">
              {dropdownList}
            </ul>
          </div>
        </div>
      </div>
    </div>);
  }

  generateLiTag(values, dropdownList) {
    values.forEach((value) => {
      dropdownList.push(<li key={value}><a key={value} href="#"> {value} </a> </li>);
    });
  }
}

export default Filter;
