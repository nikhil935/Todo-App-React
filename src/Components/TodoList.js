import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Card from "./Card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("taskList");

    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      setTaskList(parsedTasks);
    }
  }, []);

  const deleteTask = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);

    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
    setTaskList(updatedTasks);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
    setTaskList(updatedTasks);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    const updatedTasks = [...taskList, taskObj];

    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
    setTaskList(updatedTasks);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
