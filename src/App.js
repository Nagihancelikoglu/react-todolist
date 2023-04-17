
import React, { useState } from 'react'
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const[{ todos},dispatch] = useTodoLayerValue();
 const[content, setContent]= useState('');
const handleSubmit =(event) => {
  
  event.preventDefault();
if (!content) return;
const newTodo={
  id: Math.floor(Math.random()*451461542),
content,
isCompleted: false
};

dispatch({
  type: 'ADD_TODO',
  payload: newTodo,
});
setContent(' ');
};



  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" className="todo-input" 
        onChange={(event => setContent(event.target.value))} 
        value={content} 
        />
        <button className="todo-button">ekle</button>
      </form>

     <TodoList todos={todos}/>
    </div>
  )
};

export default App;
