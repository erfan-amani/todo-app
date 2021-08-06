import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './todo-slice';

const TodoForm = () => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const dispatch = useDispatch();

  const todoChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredTodo.trim() === '') return;

    dispatch(addTodo(enteredTodo));
    setEnteredTodo('');
  };

  return (
    <form
      className="relative flex bg-white px-4 py-2 rounded-xl w-full shadow-sm"
      onSubmit={formSubmitHandler}
    >
      <input
        type="text"
        className="flex-grow text-gray-700 outline-none pr-4 w-full"
        value={enteredTodo}
        onChange={todoChangeHandler}
        placeholder="Write here!"
      />
      <button
        type="submit"
        className="bg-gray-300 py-1.5 px-3 rounded-xl text-gray-700 hover:bg-blue-200 active:ring-blue-4 font-medium"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
