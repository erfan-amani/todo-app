import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  const items = useSelector((state) => state.items);

  let renderedList = (
    <div className="space-y-3 flex-grow text-gray-700">
      <p>No task found!</p>
    </div>
  );

  if (items.length > 0) {
    renderedList = (
      <TransitionGroup component="div" className="space-y-3 flex-grow">
        {items.map((todo) => (
          <CSSTransition timeout={400} key={todo.id} classNames="item">
            <Todo text={todo.text} id={todo.id} completed={todo.completed} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }

  return (
    <div className="list flex-grow overflow-y-scroll pr-2">{renderedList}</div>
  );
};

export default TodoList;
