import React from 'react';
import { useReducer } from 'react';

// Setup our faux-Redux stuff
const initialState = [{text:'hi', completed: false}];

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state;
  }
}

// Create a context object per the official API
const TodosDispatch = React.createContext(null);

export const DeepTreeDemo = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosDispatch.Provider value={dispatch}>
      <DeepTree todos={todos} />
    </TodosDispatch.Provider>
  )
}

const DeepTree = ({todos, children}) => 
  <div>
    <Child1>
      {children}
    </Child1>
    <h4>Todos:</h4>
    { todos.map((todo, index) => <p key={index}>{todo.text}</p>) }
  </div>

const Child1 = ({children}) =>
  <Child2>{children}</Child2>

const Child2 = ({children}) =>
  <DeepChild>{children}</DeepChild>

const DeepChild = ({children}) => {
    // If we want to perform an action, we can get dispatch from context.
    const dispatch = React.useContext(TodosDispatch);
  
    const handleAddClick = () => {
      dispatch({ type: 'ADD_TODO', text: 'Hello' });
    }
  
    return (
      <button onClick={handleAddClick}>Add todo</button>
    )
  }