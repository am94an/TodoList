import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li
      className={todo.completed ? 'completed' : ''}
      onClick={() => toggleComplete(todo.id)}
    >
      <span>{todo.task}</span>
      <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
    </li>
  );
}

export default TodoItem;
