import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../models/Todo';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    updateTodo(state, action: PayloadAction<Todo>) {
      const { description, title, completedAt, archivedAt } = action.payload;
      const index = state.todos.findIndex((t) => t.id === action.payload.id);
      if (index >= 0) {
        state.todos[index] = {
          ...state.todos[index],
          title,
          description,
          completedAt,
          archivedAt,
        };
      }
    },
    deleteTodo(state, action: PayloadAction<Todo>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
