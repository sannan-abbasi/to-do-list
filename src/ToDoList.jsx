import React, { useEffect, useState } from "react";
function TodoList() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("to-do")) || [],
  );
  const [newtask, setNewTask] = useState("");
  function Handleinputchange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newtask.trim() !== "") {
      setTasks((t) => [...t, newtask]);
      setNewTask("");
    }
  }
  function deleatTask(index) {
    const updatetasks = tasks.filter((_, i) => i !== index);
    setTasks(updatetasks);
  }
  function moveTaskup(index) {
    if (index > 0) {
      const updatetasks = [...tasks];
      [updatetasks[index], updatetasks[index - 1]] = [
        updatetasks[index - 1],
        updatetasks[index],
      ];
      setTasks(updatetasks);
    }
  }
  function moveTaskdown(index) {
    if (index < tasks.length - 1) {
      const updatetasks = [...tasks];
      [updatetasks[index], updatetasks[index + 1]] = [
        updatetasks[index + 1],
        updatetasks[index],
      ];
      setTasks(updatetasks);
    }
  }
  useEffect(() => {
    localStorage.setItem("to-do", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="to-do-lsit">
      <h1>TO-DO-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your daily Tasks..."
          value={newtask}
          onChange={Handleinputchange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="deleat-button" onClick={() => deleatTask(index)}>
              Deleat
            </button>
            <button className="move-button" onClick={() => moveTaskup(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTaskdown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default TodoList;
