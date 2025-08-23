import Button from "./Button.jsx";

const TaskItem = ({ task }) => {
  return (
    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
      <input type="checkbox" className="mr-3 w-4 h-4 text-blue-600" />
      <span className="flex-1 text-gray-900">{task}</span>
      <Button type="buttonDelete">Delete</Button>
    </div>
  );
};

export default TaskItem;
