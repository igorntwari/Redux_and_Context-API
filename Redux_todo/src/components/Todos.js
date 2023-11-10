import React from 'react';
import deletes from '../assets/icons/deletes.svg';
import { deleteTodo, crossTodo } from '../store/index'; 
import { useDispatch, useSelector } from 'react-redux';

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const deleteItem = (index) => {
    dispatch(deleteTodo(index));
  };

  const crossItem = (index) => {
    dispatch(crossTodo(index));
  };

  return (
    <div className="text-white mx-24 flex justify-center flex-col gap-4 pt-16">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <div key={index} className="w-1/2 bg-slate-800 rounded-lg flex items-center justify-between">
            <input
              
            onChange={() => crossItem(index)}
              type="checkbox"
              name="checking"
              checked={todo.checked}
            />
            <h1
              key={index}
              className={`cursor-pointer ${todo.checked ? 'line-through text-red-500' : 'text-white'}`}
              onClick={() => crossItem(index)}
            >
              {todo.text}
            </h1>
            <img onClick={() => deleteItem(index)} className='mr-4 h-6' src={deletes} alt="delete" />
          </div>
        ))
      ) : (
        <p>No todos to display</p>
      )}
    </div>
  );
}
