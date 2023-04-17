import React from 'react';
import { GrFormClose, GrFormEdit, GrFormCheckmark } from 'react-icons/gr';
import {useTodoLayerValue } from "../context/TodoContext";
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';
const Todo = ( { todo}) => {
  return (

  
    <div className="todo-row">
      <div>{todo.content}</div>
      <div className="todo-icons">
        <GrFormClose className="todo-icon" />
        <GrFormEdit className="todo-icon" />
      </div>
      <Icon path={mdiPencil} size={1} />
    </div>
  )
};

export default Todo;