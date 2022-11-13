import React, { useState, useEffect } from "react";

import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import TasksList from "./components/TasksList/TasksList";

import classes from "./App.module.css";
const App = () => {
  const [initTasks, setInitTasks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Tasks"));
    if (data) {
      setInitTasks(data);
    }
  }, []);

  const addNewTask = (input) => {
    setInitTasks((preState) => {
      return [...preState, { id: Math.random().toString(), content: input }];
    });
  };

  const deleteTaskHandler = (taskId) => {
    setInitTasks((list) => list.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(initTasks));
  }, [initTasks]);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <section className={classes.form}>
          <NewTaskForm onAddTask={addNewTask} />
        </section>
        <section className={classes.tasks}>
          <TasksList tasks={initTasks} onDelete={deleteTaskHandler} />;
        </section>
      </div>
    </React.Fragment>
  );
};

export default App;
