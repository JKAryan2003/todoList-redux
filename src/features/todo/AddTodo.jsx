import React from 'react'
import { useState } from 'react'

const AddTodo = ({addTodo}) => {
  const [task, setTask] = useState("")
  
  const handleClick = () => {
    addTodo(task);
    setTask("");
  }

  return (
    <div className="p-3 d-flex justify-content-center">
      <input
        type="text"
        placeholder="Track your tasks"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="py-2 rounded-1 m-1 w-75"
      />
      <button onClick={handleClick} className="btn btn-info m-1">Add Task</button>
    </div>
  )
}

export default AddTodo