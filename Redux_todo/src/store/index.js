import { createSlice,configureStore } from '@reduxjs/toolkit';
const storedTodos = [];
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: storedTodos,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    crossTodo: (state, action) => {
      state.todos[action.payload].checked = !state.todos[action.payload].checked;
    },
  },
});
export default configureStore({reducer:todoSlice.reducer})
export const { addTodo, deleteTodo, crossTodo } = todoSlice.actions;
