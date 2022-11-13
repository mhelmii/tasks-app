import React, { useState } from "react";

import classes from "./NewTaskForm.module.css";

const NewTaskForm = (props) => {
  const [newTask, setNewTask] = useState("");
  const [isEmpty, setIsEmpty] = useState();

  const newTaskHandler = (event) => {
    setNewTask(event.target.value);
    if (newTask.length !== 0) {
      setIsEmpty(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (newTask.length === 0) {
      setIsEmpty(true);
      return;
    }

    props.onAddTask(newTask);
    setNewTask("");
    setIsEmpty(false);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className={classes["new-task"]}>
        <input
          className={`${isEmpty ? classes.invalid : ""}`}
          type="text"
          placeholder="Add New Task"
          onChange={newTaskHandler}
          value={newTask}
        />
        {isEmpty && (
          <p className={classes["empty-task"]}>Please Enter Task To Add !</p>
        )}
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  );
};

export default NewTaskForm;
