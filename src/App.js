import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { replaceTodoList } from './feature/todo/todo-slice';
import TodoApp from './feature/todo/TodoApp';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todoList'));
    if (todoList && todoList.length > 0) {
      dispatch(replaceTodoList(todoList));
    }
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-blue-200 to-purple-400 ">
      <TodoApp />
    </div>
  );
}

export default App;
