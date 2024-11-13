import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObject = { text: newTask, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTaskObject]);
    setNewTask("");
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    
    updatedTasks.sort((a, b) => a.completed - b.completed);

    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const taskText = tasks[index].text;
    setNewTask(taskText);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="todo-header">
        <h2>ToDo List</h2>
        <img
          src="https://img.icons8.com/ios/50/000000/to-do.png"
          alt="To-Do Icon"
          width="30"
          height="30"
        />
      </div>

      <div className="todo-body">
        <input
          type="text"
          placeholder="Add your items"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="add-btn" onClick={addTask}>
          +
        </div>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>

            <div className="todo-controls">
              <button
                className="edit-btn"
                onClick={() => editTask(index)}
                disabled={task.completed} 
              >
                ✏️
              </button>
              <button
                className="delete-btn"
                onClick={() => toggleComplete(index)}
              >
                {task.completed ? "Undo" : "✔️"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
