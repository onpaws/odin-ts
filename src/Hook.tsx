import React from 'react';
import {useState, useEffect} from 'react';

export const StateAndEffectHookInput = () =>  {
  const name = useFormInput('Patrick');

  return (
    <div>
      <input {...name} />
    </div>
  )
}

// Abramov suggests using 'use' prefix @ https://youtu.be/dpw9EHDh2bM?t=2883
const useFormInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: any) => {
    setValue(event.target.value);
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


export const MemoHook = () => {
  // 1st param is a callback function, it returns a value
  // useMemo accepts array for 2nd param. Think of it as the 'dependencies' of the hook
  // const filteredUsers = useMemo(
  //   () => filterUsers(users, searchText),
  //   [users, searchText]
  // )

  return (
    <div>

    </div>
  )
}
  