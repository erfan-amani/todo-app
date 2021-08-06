const Category = ({ text, onClick, active }) => {
  const isActive = active === text;

  return (
    <button
      onClick={onClick.bind(null, text)}
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
