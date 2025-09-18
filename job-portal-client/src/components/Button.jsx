
const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className="px-4 py-2 border border-gray-300 text-base rounded font-medium bg-white text-primary transition-colors hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue"
      aria-label={title}
    >
      {title}
    </button>
  );
};

export default Button;
