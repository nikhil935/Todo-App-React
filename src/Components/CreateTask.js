import React, { useState } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "task-name") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let taskObj = {
      name: taskName,
      description: description,
    };
    save(taskObj);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>CreateTask</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              name="task-name"
              placeholder="create a task"
              className="form-control"
              value={taskName}
              onChange={onChangeInput}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows={10}
              cols={10}
              name="description"
              className="form-control"
              value={description}
              onChange={onChangeInput}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create Task
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
