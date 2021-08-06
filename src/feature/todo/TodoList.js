import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Todo from './Todo';
import CategoryList from '../category/CategoryList';
import './TodoList.css';

const TodoList = () => {
  const items = useSelector((state) => state.todo.items);
  const activeCategory = useSelector((state) => state.category.active);

  let renderedList = (
    <div className="space-y-3 flex-grow text-gray-700">
      <p>No task found!</p>
    </div>
  );

  let filteredList = items;
  if (activeCategory !== 'all') {
    filteredList = items.filter(
      (item) => item.completed === (activeCategory === 'complete')
    );
  }

  if (filteredList.length > 0) {
    renderedList = (
      <TransitionGroup
        component="div"
        className="list space-y-3 flex-grow  overflow-y-scroll pr-2"
      >
        {filteredList.map((todo) => (
          <CSSTransition timeout={400} key={todo.id} classNames="item">
            <Todo text={todo.text} id={todo.id} completed={todo.completed} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }

  return (
    <div className="flex flex-col gap-6 flex-grow ">
      <CategoryList />
      {renderedList}
    </div>
  );
};

export default TodoList;
