import * as React from 'react';
import {useState, useEffect} from 'react';

/* 
  Note: I'm not using TS for this particular file b/c as of 20181031, 
  the TS definitions are not available for React v16.7.0-alpha.
*/ 

const Hook = () =>  {
  const name = useFormInput('Patrick');

  return (
    <div>
      <input {...name} />
    </div>
  )
}

export default Hook

// Abramov suggests using 'use' prefix @ https://youtu.be/dpw9EHDh2bM?t=2883
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    // analagous to componentDidMount AND componentDidUpdate
    console.log(`useEffect() fired. Value is ${value}.`)

    // to clean up a side effect, you can optionally return a fn.
    // return () => window.removeEventListener('myEvent', myHandler);
  });
  
  return {
    value, 
    onChange: handleChange
  };
}