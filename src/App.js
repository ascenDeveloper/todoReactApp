import React from 'react';
import './App.css';

const todos = [
  { text: 'Pelar cebolla', completed: false},
  { text: 'Cortar cebolla', completed: false},
  { text: 'Poner cebolla', completed: false}
]

function App(props) {
  return (
    <>
      <TodoCounter />
      <h2>Has completado 2 de 3 TODOs</h2>
      <TodoSearch />
      <input placeholder='Cebolla' />
  
      <TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </>
  );
}

export default App;
