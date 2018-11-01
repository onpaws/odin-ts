import React from 'react';

// This is a pure functional component. 
// It takes one primitive prop, `frequency`, and renders it.
export const OnePropComponent = ({frequency}) => {
  console.log('<OnePropComponent /> just rendered');
  return (
    <p>{'Hi, I\'m <OnePropComponent>'} and I update every {frequency} seconds.</p>
  )
};

// This version is memoized. 
// It only rerenders if props change.
export const OnePropComponentMemoized = React.memo(({frequency}) => {
  
  console.log('<OnePropComponentMemoized /> just rendered');
  return (
    <p>Memoized: {'Hi, I\'m <OnePropComponentMemoized>'} and I update every {frequency} seconds.</p>
  )
});