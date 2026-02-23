import { createSlice, nanoid } from '@reduxjs/toolkit';


let initialState = {
  todo: [],
}

const tasks = localStorage.getItem("todos");
const data = JSON.parse(tasks);
initialState.todo = data || [];




const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        data: action.payload
      }

      state.todo.push(task);

      localStorage.setItem("todos", JSON.stringify(state.todo));
    },
    deleteTask: (state, action) => {
     state.todo= state.todo.filter(task =>  task.id !== action.payload);

     localStorage.setItem("todos", JSON.stringify(state.todo));
    }

  }
});



export const { addTask,deleteTask } = todoSlice.actions;
export default todoSlice.reducer;

