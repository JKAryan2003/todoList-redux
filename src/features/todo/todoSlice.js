import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: Date.now(),
      task: "First Task",
      complete: false
    }
  ]
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todos.push(action.payload)
    },
    deleteTask: (state, action) => {
      state.todos.splice(action.payload, 1)
    },
    editTask: (state, action) => {

    }
  }
})

export default todoSlice.reducer
export const { addTask, deleteTask, editTask } = todoSlice.actions