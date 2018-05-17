import React from 'react';
import Rating from './rating';

class Cuisine extends React.Componnet {
  render() {
    const cuisine = this.props.cuisine;

    return <span className="cuisine"> {cuisine} </span>;
  }
}

export default Cuisine;
