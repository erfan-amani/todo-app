import Category from './Category';

const CategoryList = ({ activeCategory, onChange }) => {
  return (
    <div className="flex gap-4 justify-center">
      <Category text="all" active={activeCategory} onClick={onChange} />
      <Category text="complete" active={activeCategory} onClick={onChange} />
      <Category text="uncomplete" active={activeCategory} onClick={onChange} />
    </div>
  );
};

export default CategoryList;
