import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  return (
    <div className="flex flex-col bg-gray-200 rounded-2xl px-4 py-5 sm:px-10 sm:py-6  lg:px-12 text-sm sm:taxt-base h-5/6 w-10/12 sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-1/3 shadow-xl gap-8 font-mono">
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default TodoApp;
