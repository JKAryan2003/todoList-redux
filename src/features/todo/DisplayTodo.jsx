import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './todoSlice'
const DisplayTodo = ({todos}) => {

  const dispatch = useDispatch()
  return (
    <>
      {todos.map((todo) => {
        return (
          <>
            <div className='row'>
              <div className='col-md-8'>
                <span>{todo.task}</span>
              </div>

              <div className='col-md-2'><button>Edit</button></div>

              <div className='col-md-2'><button>Delete</button></div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default DisplayTodo