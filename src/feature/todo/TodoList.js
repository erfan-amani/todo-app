import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CategoryList from '../category/CategoryList';

import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const items = useSelector((state) => state.items);

  const categoryChangeHandler = (text) => {
    setSelectedCategory(text);
  };

  let renderedList = (
    <div className="space-y-3 flex-grow text-gray-700">
      <p>No task found!</p>
    </div>
  );

  let filteredList = items;
  if (selectedCategory !== 'all') {
    filteredList = items.filter(
      (item) => item.completed === (selectedCategory === 'complete')
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
      <CategoryList
        onChange={categoryChangeHandler}
        activeCategory={selectedCategory}
      />
      {renderedList}
    </div>
  );
};

export default TodoList;
