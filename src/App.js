import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const newTasks = [...tasks];

  const handleSubmit = (event) => {
    event.preventDefault();
    newTasks.push({ name: taskInput, taskDone: false });
    setTasks(newTasks);
    setTaskInput("");
  };
  const clearTask = (index) => {
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const crossTask = (index) => {
    newTasks[index].taskDone = !newTasks[index].taskDone;
    setTasks(newTasks);
  };

  //console.log("current tasks", tasks);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>To-Do list</h1>
        <ul style={{ paddingInlineStart: "inherit" }}>
          {tasks.map((tasks, index) => {
            return (
              <div className="list">
                <span
                  onClick={() => {
                    clearTask(index);
                  }}
                  className="cross"
                >
                  ✖︎
                </span>
                <li
                  className={tasks.taskDone === true ? "crossTask" : null}
                  key={index}
                  onClick={() => {
                    crossTask(index);
                  }}
                >
                  {tasks.name}
                </li>
              </div>
            );
          })}
        </ul>
        <input
          className="addBar"
          placeholder="Add task"
          type="text"
          value={taskInput}
          onChange={(event) => {
            setTaskInput(event.target.value);
          }}
        />
        <input className="button" type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default App;
