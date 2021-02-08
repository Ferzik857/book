import React from "react"
import TodoList from "./componnent/TodoList"
function App() {
let todos = [
  {id:1, completed: false, title: "купить хлеб"},
  {id:2, completed: false, title: "купить масло"},
  {id:3, completed: false, title: "купить молоко"}
]

function toggleTodo (id){
todos = todos.map(todo => {
  if(todo.id == id){
    todo.completed = !todo.completed
  }
  return todo
})
}

  return (
    <div className="wrapper">
    <h1>React tutorial</h1>
    <TodoList todos={todos}  onTog={toggleTodo} />
    </div>
  );
}

export default App;
