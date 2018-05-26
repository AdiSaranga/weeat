import React from 'react';
import Star from '../assets/images/star.jpeg';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating;
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={Star} alt={'rating'} className="star" key={this.props.uniqueKey+i}/>);
    }

    return <span className="stars"> {stars} </span>;
  }
}

export default Rating;
