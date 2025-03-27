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
    add: (state, action) => {
      console.log(state.todos);
      
      state.todos.push(action.payload)
    },
    delete: (state, action) => {
      state.todos.delete(action.payload)
    }
  }
})

export default todoSlice.reducer
export const { add } = todoSlice.actions