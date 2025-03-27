import React from 'react'
import { useState } from 'react'

const EditTodo = ({ editTodo, todo, handleCancel }) => {
  const [value, setValue] = useState(todo.task)
  return (
    <div className="row p-3 m-5">
      <div className="col-md-6">
        <input
          type="text"
          placeholder="Update Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="py-2 rounded-1 w-100"
        />
      </div>

      <div className="col-md-3">
        <button onClick={() => editTodo(todo.id, value)} className="btn text-info fs-4"><i class="bi bi-check-circle-fill"></i></button>
      </div>

      <div className="col-md-3">
        <button onClick={() => handleCancel(todo.id)} className="btn text-danger fs-4"><i class="bi bi-x-circle-fill"></i></button>
      </div>
    </div>
  )
}

export default EditTodo