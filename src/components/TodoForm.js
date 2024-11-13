import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task); 
      setTask(''); 
    }
  };

  return (
    <div className="todo-body">
      <input
        type="text"
        placeholder="أضف مهمة جديدة"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <img
        src="https://img.icons8.com/ios/50/000000/plus.png" 
        alt="Add"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default TodoForm;
