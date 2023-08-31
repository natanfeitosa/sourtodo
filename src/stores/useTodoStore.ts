import { defineStore } from "sourstore";
import { FilterValue, Todo } from "../types";

const useTodoStore = defineStore({
  state: () => ({
    todos: [] as Todo[],
    filter: "all" as FilterValue,
  }),
  getters: {
    filteredTodos({ filter, todos }) {
      switch (filter) {
        case "active":
          return todos.filter((todo) => !todo.completed);
        case "completed":
          return todos.filter((todo) => todo.completed);
        default:
          return todos;
      }
    },
  },
  actions: {
    createTodo(title: string) {
      this.todos = [
        ...this.todos,
        {
          title,
          completed: false,
          id: Date.now(),
        },
      ];
    },
    updateTodo(id: number, uptd?: Todo) {
      const _todos = this.todos.filter((todo) => todo.id != id);
      if (uptd) {
        this.todos = _todos.concat(uptd);
        return;
      }
      this.todos = _todos;
    },
  },
});

export default useTodoStore