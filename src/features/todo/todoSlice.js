import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: Date.now(),
      task: "First Task",
      complete: false,
      isEditing: false
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
    updateTask: (state, action) => {
      if (state.todos[action.payload].complete){
        state.todos[action.payload].complete = false
      } else {
        state.todos[action.payload].complete = true
      }
    },
    handleEdit: (state, action) => {
      state.todos[action.payload].isEditing = true
    },
    editTask: (state, action) => {
      console.log(action.payload);
      state.todos[action.payload.id].task = action.payload.value
      state.todos[action.payload.id].isEditing = false
    },
    cancelEdit: (state, action) => {
      state.todos[action.payload].isEditing = false
    }
  }
})

export default todoSlice.reducer
export const { addTask, deleteTask, editTask, updateTask, cancelEdit, handleEdit } = todoSlice.actions