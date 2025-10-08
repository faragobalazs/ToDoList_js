import { useState } from "react";
import "../App.css";

export default function Input() {
  const [inputField, setInputField] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function for updating the input field
  const handleInputChange = (event) => {
    setInputField(event.target.value);
  };

  // Function for preventing the default browser action of reloading the page
  const handleSubmit = (event) => {
    event.preventDefault();

    // If the input field is empty, do nothing
    if (inputField.trim() === "") {
      return;
    }

    // Create a new task object
    const newTask = {
      id: Date.now(),
      text: inputField.trim(),
      completed: false,
    };

    // Add the new task to the tasks array
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Clear the input field
    setInputField("");
  };

  // Delete task
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Line through finished task
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="taskInput">
          <input
            type="text"
            value={inputField}
            onChange={handleInputChange}
            placeholder="Enter a new task"
          />
        </div>
        <div className="submitButton">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>

      <div className="tasks">
        <h2>Tasks</h2>
        {tasks.length === 0 ? (
          <p>You haven't got any task to do. Enjoy your day! 🍹🏝️</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="newTaskWrapper">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
              />
              <label
                htmlFor={`task-${task.id}`}
                className={task.completed ? "lineThrough" : ""}
              >
                {task.text}
              </label>
              <span
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
              >
                {" "}
                ❌{" "}
              </span>
            </div>
          ))
        )}
      </div>
    </>
  );
}
