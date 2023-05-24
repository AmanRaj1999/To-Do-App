import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), text: todoText, completed: false },
      });
      setTodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
