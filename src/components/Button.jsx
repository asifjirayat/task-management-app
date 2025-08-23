const Button = ({ type = "default", children, ...rest }) => {
  const styles = {
    default:
      "px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer",
    buttonSelected:
      "px-4 py-2 bg-blue-100 text-blue-700 border-2 border-blue-300 rounded-lg font-medium capitalize transition-colors",
    buttonUnselected:
      "px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent rounded-lg font-medium capitalize transition-colors cursor-pointer",
    buttonDelete:
      "px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors",
  };

  const currentStyles = styles[type] || styles.default;
  return (
    <button className={currentStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
