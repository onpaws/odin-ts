import * as React from 'react';
import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}


export const HookReducer = ({ initialCount }: any) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount })
  return (
    <div>
      <div>
        Count: {state.count}
      </div>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </div>
    </div>
  )
}
