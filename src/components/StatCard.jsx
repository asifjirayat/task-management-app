const StatCard = ({ tasksCount, label, type = "default" }) => {
  const styles = {
    default: {
      container: "p-4 bg-blue-50 rounded-lg",
      text: "text-2xl font-bold text-blue-600",
    },
    pending: {
      container: "p-4 bg-yellow-50 rounded-lg",
      text: "text-2xl font-bold text-yellow-600",
    },
    completed: {
      container: "p-4 bg-green-50 rounded-lg",
      text: "text-2xl font-bold text-green-600",
    },
  };

  const currentStyle = styles[type] || styles.default;

  return (
    <div className={currentStyle.container}>
      <div className={currentStyle.text}>{tasksCount}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default StatCard;
