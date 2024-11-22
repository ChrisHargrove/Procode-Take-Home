import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './Store';
import { Todo } from '../models/Todo';
import { addTodo, updateTodo, deleteTodo } from './TodoReducer';

type TodoMethods = {
  createTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  completeTodo: (todo: Todo) => void;
  incompleteTodo: (todo: Todo) => void;
  archiveTodo: (todo: Todo) => void;
  unarchiveTodo: (todo: Todo) => void;
};

export const useTodoMethods = (): TodoMethods => {
  const dispatch = useDispatch();
  return {
    createTodo: (todo: Todo) => dispatch(addTodo(todo)),
    updateTodo: (todo: Todo) => dispatch(updateTodo(todo)),
    deleteTodo: (todo: Todo) => dispatch(deleteTodo(todo)),
    completeTodo: (todo: Todo) =>
      dispatch(
        updateTodo({
          ...todo,
          completedAt: new Date(Date.now()).toDateString(),
        })
      ),
    incompleteTodo: (todo: Todo) =>
      dispatch(updateTodo({ ...todo, completedAt: undefined })),
    archiveTodo: (todo: Todo) =>
      dispatch(
        updateTodo({ ...todo, archivedAt: new Date(Date.now()).toDateString() })
      ),
    unarchiveTodo: (todo: Todo) =>
      dispatch(updateTodo({ ...todo, archivedAt: undefined })),
  };
};

export const useTodos = (): { todos: Todo[] } & TodoMethods => {
  const todos: Todo[] = useSelector((state: RootState) => state.todos.todos);
  const methods = useTodoMethods();

  return {
    todos: todos?.filter((t) => t.archivedAt === undefined),
    ...methods,
  };
};

export const useArchivedTodos = (): { todos: Todo[] } & TodoMethods => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const methods = useTodoMethods();

  return {
    todos: todos.filter((t) => t.archivedAt !== undefined),
    ...methods,
  };
};

export const useTodo = (id?: string): { todo?: Todo } & TodoMethods => {
  const todo = useSelector((state: RootState) =>
    state.todos.todos.find((t) => t.id === id)
  );
  const methods = useTodoMethods();

  return {
    todo,
    ...methods,
  };
};
