import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const DisplayTodo = () => {
  const todos = useSelector((state) => state.todo.todos)
  console.log(todos);
  
  const dispatch = useDispatch()
  return (
    <div className="row shadow p-3 m-5 rounded">
      {todos.map((todo) => {
        return (
          <span>{todo.task}</span>
        )
      })}
    </div>
  )
}

export default DisplayTodo