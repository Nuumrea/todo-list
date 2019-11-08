import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const newTasks = [...tasks];

  const handleSubmit = event => {
    event.preventDefault();
    newTasks.push({ name: taskInput });
    setTasks(newTasks);
  };

  console.log("current tasks", tasks);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>To-Do list</h1>
        <ul className="list">
          {tasks.map((tasks, index) => {
            return <li key={index}>{tasks.name}</li>;
          })}
        </ul>
        <input
          className="addBar"
          placeholder="Title"
          type="text"
          value={taskInput}
          onChange={event => {
            setTaskInput(event.target.value);
          }}
        />
        <input className="button" type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default App;
