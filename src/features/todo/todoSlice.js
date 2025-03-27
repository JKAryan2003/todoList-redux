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
      state.todos.push(action.payload)
    }
  }
})