import { TodoItemProps } from './types'

export default function TodoItem({ todo, updateTodo }: TodoItemProps) {
  const onChange = () => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed})
  }

  const onClick = () => updateTodo(todo.id)
  
  return (
    <li className={['todo-item', todo.completed && 'completed']}>
      <input
        type="checkbox"
        checked={todo.completed}
        className="complete-item"
        onChange={onChange}
      />
      <h3 className="title-item">{todo.title}</h3>
      <button className="remove-item" onClick={onClick}>&times;</button>
    </li>
  )
}
