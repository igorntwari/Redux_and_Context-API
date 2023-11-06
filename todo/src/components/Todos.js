import React from 'react';
import deletes from '../assets/icons/deletes.svg';

export default function Todos({ todos, setTodos }) {

  const deleteItem = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const crossItem = (index) => {
    let newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="text-white mx-24 flex justify-center flex-col gap-4 pt-16">
      {todos && todos.length > 0 ? (
        todos.map((todo, index) => (
          <div key={index} className="w-1/2 bg-slate-800 rounded-lg flex items-center justify-between">
            <input
              onClick={() => crossItem(index)}
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
      ) : null}
      {todos && todos.length === 0 && (
        <p>No todos to display</p>
      )}
    </div>
  );
}
