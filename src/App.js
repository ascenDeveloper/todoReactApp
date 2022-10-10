import React from 'react';
import './App.css';
import {TodoCounter} from './TodoCounter';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';

const todos = [
  { text: 'Pelar cebolla', completed: false},
  { text: 'Cortar cebolla', completed: false},
  { text: 'Poner cebolla', completed: false}
]

function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
  
      <TodoList>
        {todos.map(todo => (
          <TodoItem text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
