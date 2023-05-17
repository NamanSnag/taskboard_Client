import React, { useEffect, useState, useRef } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import "./style.scss";
import { List } from "../../components";
import axios from "axios";
import { base_URL } from "../../utils/url";

const Home = () => {

  const [list, setList] = useState([]);

  const title = useRef();

  
  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${base_URL}/list/all`, {token});
      setList(response.data);
    } catch (error) {
      console.error("Error fetching lists:", error);
    }
  };

  const createList = async (title) => {
    try {
      const response = await axios.post(`${base_URL}/list/`, { title });
      // setList([...list, response.data]);
      console.log(response);
    } catch (error) {
      console.error("Error creating list:", error);
    }
  };

  const handleCreateList = (title) => {
    createList(title);
  };

  const handleDragEnd = () => {
    
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
   <div className="home">
      <div className="home__container">
        <div className="home__lists">
          {list.map((list) => (
            <List
             key={list._id} list={list} />
          ))}
        </div>
        <div className="home__create-list">
          <input
            type="text"
            placeholder="Enter list title"
            ref={title}
          />
          <button onClick={handleCreateList}>Create List</button>
        </div>
      </div>
    </div>
    </DragDropContext>
  );
};


export default Home;
