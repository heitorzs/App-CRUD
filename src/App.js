import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from 'axios';
import baseURL from './utils/constant.js'

function App() {

  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [updateUI, setupdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTask(res.data);
    })
  }, [updateUI]);

  const addTask = () => {
    axios.post(`${baseURL}/create`, { task: input }).then((res) => {
      console.log(res.data)
      setInput("");
      setupdateUI((prevState) => !prevState)
    })
  }

  const updateMode = (id, text) => {
    setInput(text)
    setUpdateId(id)
  }

  const updateTask = () => {
    axios.put(`${baseURL}/update/${updateId}`, { task: input }).then((res) => {
      console.log(res.data);
      setupdateUI((prevState) => !prevState);
      setUpdateId(null);
      setInput("");
    })
  }

  return (
    <main className="app">
      <h1 className="app__title">Crud operations</h1>
      <div className="app__input_holder">
        <input className="app__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn_add" type="submit" onClick={updateId ? updateTask : addTask}>
          {updateId ? "update Task" : "Add task"}
        </button>
      </div>
      <div>
        <ul className="app__list">
          {task.map(task =>
            <List
              key={task._id}
              id={task._id}
              task={task.task}
              setUpdateUI={setupdateUI}
              updateMode={updateMode} />)}
        </ul>
      </div>

    </main>
  )
}

export default App;
