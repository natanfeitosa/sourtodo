export type Todo = {
  /** Default: Date.now() */
  id: number
  title: string
  completed: boolean
}

export type TodoItemProps = {
  todo: Todo
  updateTodo(id: number, uptd?: Todo): void
}

export type FilterValue = 'all' | 'completed' | 'active'