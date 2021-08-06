import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from './category-slice';

const Category = ({ text }) => {
  const activeCategory = useSelector((state) => state.category.active);
  const dispatch = useDispatch();

  const isActive = activeCategory === text;

  const changeCategoryHandler = () => {
    dispatch(changeCategory(text));
  };

  return (
    <button
      onClick={changeCategoryHandler}
      className={`px-4 py-2 rounded-full capitalize ${
        isActive
          ? ' bg-purple-400 shadow-sm text-gray-100 font-bold'
          : 'bg-gray-300 text-gray-600'
      }`}
    >
      {text}
    </button>
  );
};

export default Category;
