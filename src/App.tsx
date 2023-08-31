import TodoItem from './components/TodoItem'
import useTodoStore from './stores/useTodoStore'

export default function App() {
  const todoStore = useTodoStore()

  const createTodo = (event: SubmitEvent) => {
    event.preventDefault()
    todoStore.createTodo(event.target.elements.todo.value)
    event.target.elements.todo.value = ''
  }
  
  function onChangeFilter(event) {
    const { name, value, checked } = event.target;
  
    // Desmarca todos os botões de rádio quando um item é desmarcado
    if (name === 'filtering' && checked === false) {
      Array.from(event.target.form.elements[name]).forEach((radio) => {
        radio.checked = false;
      });
    }
  
    if(checked) {
      todoStore.filter = value
    }
  }
  
  return (
    <div className="container">
      <h1 className="title">TODOs</h1>
      <form onSubmit={createTodo}>
        <input type="text" name="todo" className="input-todo" placeholder="What needs to be done?"/>
      </form>
      <ul className="todo-list">
      {
        ...todoStore.filteredTodos.map(todo => <TodoItem todo={todo} updateTodo={todoStore.updateTodo} />)
      }
      </ul>
      <form className="filters">
        <div>
          <input type="radio" name="filtering" value="all" id="all" onChange={onChangeFilter} checked={todoStore.filter == 'all'} />
          <label for="all">all</label>
        </div>
        <div>
          <input type="radio" name="filtering" value="completed" id="completed" onChange={onChangeFilter} checked={todoStore.filter == 'completed'} />
          <label for="completed">completed</label>
        </div>
        <div>
          <input type="radio" name="filtering" value="active" id="active" onChange={onChangeFilter} checked={todoStore.filter == 'active'} />
          <label for="active">active</label>
        </div>
      </form>
    </div>
  )
}
