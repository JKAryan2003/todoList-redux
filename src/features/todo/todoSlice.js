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

    },
    editTask: (state, action) => {
      console.log(action.payload);
      state.todos[action.payload.id].task = action.payload.value
    },
    cancelEdit: (state, action) => {

    }
  }
})

export default todoSlice.reducer
export const { addTask, deleteTask, editTask, updateTask } = todoSlice.actions