import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxClick}
      />
      <span>{todo.title}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
};

export default TodoItem;