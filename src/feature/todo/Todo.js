import { useDispatch } from 'react-redux';

import { deleteTodo, toggleComplete } from './todo-slice';
import SquareIcon from '../Icon/SquareIcon';
import CheckedIcon from '../Icon/CheckedIcon';
import DeleteIcon from '../Icon/DeleteIcon';

const Todo = ({ text, id, completed }) => {
  const dispatch = useDispatch();

  const completeTodoHandler = () => {
    dispatch(toggleComplete(id));
  };

  const deleteHandler = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div
      className={`flex items-center gap-2 bg-white py-2 px-4 rounded-xl text-gray-600 cursor-pointer capitalize ${
        completed ? 'line-through' : ''
      }`}
    >
      <div
        className="flex items-center gap-2 flex-grow"
        onClick={completeTodoHandler}
      >
        <span>
          {completed && <CheckedIcon />}
          {!completed && <SquareIcon />}
        </span>
        <span>{text}</span>
      </div>
      <span onClick={deleteHandler}>
        <DeleteIcon />
      </span>
    </div>
  );
};

export default Todo;
