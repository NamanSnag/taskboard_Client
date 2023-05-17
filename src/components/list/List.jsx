import React, { useEffect, useState } from "react";
import Task from "../task/Task";
import axios from "axios";
import { base_URL } from "../../utils/url";
import { Droppable } from "react-beautiful-dnd";

import "./style.scss";

const List = ({ list }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${base_URL}/task/all/${list._id}`, {
        token,
      });
      setTasks(response.data.details);
    } catch (error) {
      console.error("Error fetching lists:", error);
    }
  };

  return (
    <div className="list">
    <div className="list__head">
      <p>{list.title}</p>
    </div>
    <Droppable droppableId={list._id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="list__body"
        >
          {tasks.map((task, index) => (
            <Task key={task._id} index={index} task={task} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
  );
};

export default List;
