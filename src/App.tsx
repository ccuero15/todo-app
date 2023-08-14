import { useState } from "react"
import { Todos } from "./components/Todos"

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
  return (
    <>
      <div className="todoapp">

        <Todos todos={mockTodos} />
      </div>
    </>
  )
}

export default App
