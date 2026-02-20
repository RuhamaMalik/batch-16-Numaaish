import { createSlice, nanoid } from '@reduxjs/toolkit';


let initialState = {
  todo: [{ id: 1, data: "my task 1" }, {}]
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        data: action.payload
      }

      state.todo.push(task);
    },
    
  }
});



export const {addTask} = todoSlice.actions;
export default todoSlice.reducer;

