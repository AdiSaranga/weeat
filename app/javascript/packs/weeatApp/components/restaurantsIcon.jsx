import React from 'react';

function RestaurantIcon(props) {
  const defaultIcon = 'F';

  const cuisineTypeToIcon = {
    American: 'R',
    Asian: 'G',
    Bagels: 'V',
    Bakery: 'Q',
    BBQ: '%',
    British: '',
    Burger: 'A',
    Cafe: 'B',
    Chinese: 'D',
    Cuban: '7',
    Desserts: 'E',
    Donuts: 'M',
    European: '',
    'Fast Food': 'W',
    French: 'C',
    'Healthy Food': 'H',
    Indian: 'J​',
    Italian: '5',
    Japanese: 'I',
    'Latin American': '8',
    Mediterranean: '?',
    Mexican: '8',
    'Middle Eastern': '?',
    Moroccan: '@',
    'New American': 'R',
    Pizza: 'L',
    Ramen: '​.',
    Sandwich: ',',
    Seafood: 'C',
    Southern: '0',
    Steak: '3',
    Sushi: 'I',
    Ukrainian: '&',
  };

  const icon = cuisineTypeToIcon[props.cuisineType] || defaultIcon;

  return (
    <span className="cuisine"> {icon} </span>
  );
}

export default RestaurantIcon;
