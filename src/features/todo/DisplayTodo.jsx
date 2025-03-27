import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTask } from './todoSlice'

const DisplayTodo = ({ todo, deleteTodo, toggleTask, toggleEdit }) => {

  const dispatch = useDispatch()
  return (
    <div className="row shadow p-3 m-5 rounded">
      <div className='col-md-6 fs-5'>
        <span onClick={() => toggleTask(todo.id)} className={ (todo.complete)? 'strike' : ''}>{todo.task}</span>
      </div>

      <div className='col-md-3'>
        <button className='btn text-info fs-4' onClick={() => toggleEdit(todo.id)}><i class="bi bi-pencil-fill"></i></button>
      </div>

      <div className='col-md-3'>
        <button className='btn text-danger fs-4' onClick={() => deleteTodo(todo.id)}><i class="bi bi-trash-fill"></i></button> 
      </div>
    </div>
  )
}

export default DisplayTodo