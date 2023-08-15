import { useState } from "react"
import { Todos } from "./components/Todos"
import { TodoId, type Todo as TodoType } from "./type"

const mockTodos = [
  {
    id: '2',
    title: 'Ganar Demanda',
    completed: true
  },
  {
    id: '3',
    title: 'Que Me paguen mi dinero',
    completed: false
  },
  {
    id: '4',
    title: 'Negociar Salida',
    completed: false
  },
]


function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(element => element.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    });
    setTodos(newTodos);
  }
  return (
    <>
      <div className="todoapp">

        <Todos
          onToggleCompleteTodo={handleCompleted}
          onRemoveTodo={handleRemove}
          todos={todos}
        />
      </div>
    </>
  )
}

export default App
