import { create } from "zustand";
import type { Todo } from "../types/Todo";

interface TodoState {
  todos: Todo[];

  addTodo: (
    title: string,
    description: string
  ) => void;

  deleteTodo: (id: number) => void;

  editTodo: (
    id: number,
    title: string,
    description: string
  ) => void;
}

export const useTodoStore =
  create<TodoState>((set) => ({
    todos: [],

    addTodo: (title, description) =>
      set((state) => ({
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title,
            description,
          },
        ],
      })),

    deleteTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter(
          (todo) => todo.id !== id
        ),
      })),

    editTodo: (
      id,
      title,
      description
    ) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                title,
                description,
              }
            : todo
        ),
      })),
  }));