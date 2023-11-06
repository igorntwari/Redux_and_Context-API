import React, { useState } from 'react';
import todo from '../assets/icons/todo.svg';
import plus from '../assets/icons/plus.svg';
import Todos from './Todos'; 

function Home() {
  const storedTodos = JSON.parse(localStorage.getItem('items')) || []
  console.log(storedTodos)
  const [add, setAdd] = useState('');
  const [todos, setTodos] = useState(storedTodos);
  const addItem = () => {
    
    if (add) {
      const newTask = { text: add, checked: false };
      setTodos([...todos, newTask]);
      localStorage.setItem('items',JSON.stringify([...todos, newTask]))
      setAdd('');
    }
  };

    
  return (
    <div>
      <div className='flex justify-center pt-24'>
        <img src={todo} alt="Todo Icon" />
      </div>
      <div className='flex justify-center pt-24 gap-4'>
        <input
          className='w-1/2 bg-slate-700 rounded-md pl-10 text-white'
          placeholder='add your todos'
          value={add}
          checked={todo.checked}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button
          onClick={addItem}
          className='bg-blue-700 text-white font-bold flex items-center gap-8 py-4 px-2 rounded-md'
        >
          Create
          <img src={plus} alt="Todo Icon" />
        </button>
      </div>
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Home;
