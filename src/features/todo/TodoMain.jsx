import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DisplayTodo from './DisplayTodo'
import AddTodo from './AddTodo'
import { add } from './todoSlice'

const TodoMain = () => {
  const todos = useSelector((state) => state.todo.todos)  
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  const addTodo = (task) => {
    dispatch(add(
      {
        id: Date.now(),
        task: task,
        complete: false
    }))
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo}/>
      {todos.map((todo, index) => 
      isEditing ? 
      null : 
      (<DisplayTodo todo={todo} />))}
    </>
  )
}

export default TodoMain