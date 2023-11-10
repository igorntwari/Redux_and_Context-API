import React, { useState } from 'react';
import todo from '../assets/icons/todo.svg';
import plus from '../assets/icons/plus.svg';
import { addTodo } from '../store/index'; 
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();


  const [add, setAdd] = useState('');

    const addItem = () => {
      if (add) {
        const newTask = { text: add, checked: false };
        dispatch(addTodo(newTask));
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
    </div>
  );
}
