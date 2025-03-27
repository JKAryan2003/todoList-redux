import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DisplayTodo from './DisplayTodo'
import AddTodo from './AddTodo'
import { addTask, deleteTask } from './todoSlice'

const TodoMain = () => {
  const todos = useSelector((state) => state.todo.todos)  
  
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  const addTodo = (task) => {
    dispatch(addTask(
      {
        id: Date.now(),
        task: task,
        complete: false
    }))
  }

  const deleteTodo = (id) => {
    let findTask = {}
    todos.forEach(todo => {
      if (todo.id == id) {
        findTask =  todo
      }
    });
    let index = todos.indexOf(findTask)
    dispatch(deleteTask(index))
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo}/>
      {todos.map((todo, index) => 
      isEditing ? 
      null : 
      (<DisplayTodo todo={todo} deleteTodo={deleteTodo}/>))}
    </>
  )
}

export default TodoMain