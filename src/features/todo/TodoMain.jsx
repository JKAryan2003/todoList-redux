import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DisplayTodo from './DisplayTodo'
import AddTodo from './AddTodo'
import { addTask, deleteTask, updateTask, editTask, handleEdit, cancelEdit } from './todoSlice'
import EditTodo from './EditTodo'

const TodoMain = () => {
  const todos = useSelector((state) => state.todo.todos)  
  const dispatch = useDispatch()

  const addTodo = (task) => {
    dispatch(addTask(
      {
        id: Date.now(),
        task: task,
        complete: false,
        isEditing: false
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

  const toggleTask = (id) => {
    let findTask = {}
    todos.forEach(todo => {
      if (todo.id == id) {
        findTask =  todo
      }
    });
    let index = todos.indexOf(findTask)
    dispatch(updateTask(index))
  }

  const toggleEdit = (id) => {
    let findTask = {}
    todos.forEach(todo => {
      if (todo.id == id) {
        findTask =  todo
      }
    });
    let index = todos.indexOf(findTask)
    dispatch(handleEdit(index))
  }

  const handleCancel = (id) => {
    let findTask = {}
    todos.forEach(todo => {
      if (todo.id == id) {
        findTask =  todo
      }
    });
    let index = todos.indexOf(findTask)
    dispatch(cancelEdit(index))
  }

  const editTodo = (id, value) => {
    let findTask = {}
    todos.forEach(todo => {
      if (todo.id == id) {
        findTask =  todo
      }
    });
    let index = todos.indexOf(findTask)
    dispatch(editTask({
      id: index,
      value: value
    }))
 
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo}/>
      {todos.map((todo, index) => 
      todo.isEditing ? 
      (<EditTodo toggleEdit={toggleEdit} todo={todo} editTodo={editTodo} handleCancel={handleCancel}/>) : 
      (<DisplayTodo todo={todo} deleteTodo={deleteTodo} toggleTask={toggleTask} toggleEdit={toggleEdit}/>))}
    </>
  )
}

export default TodoMain