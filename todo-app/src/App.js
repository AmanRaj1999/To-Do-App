import React, { useReducer } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch} />
      {state.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default App;
