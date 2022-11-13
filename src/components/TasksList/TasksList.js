import React from "react";

import classes from "./TasksList.module.css";

const TasksList = (props) => {
  if (props.tasks.length === 0) {
    return <p className={classes["empty-list"]}>There're No Tasks Here Yet!</p>;
  }
  return (
    <React.Fragment>
      <ul className={classes.list}>
        {props.tasks.map((task) => (
          <li key={task.id}>
            {task.content}
            <button onClick={() => props.onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TasksList;
