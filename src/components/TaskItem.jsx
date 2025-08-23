import Button from "./Button.jsx";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
      <input
        type="checkbox"
        className="mr-3 w-4 h-4 text-blue-600"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span
        className={`flex-1 ${
          task.completed ? "text-gray-500 line-through" : " text-gray-900"
        }`}
      >
        {task.text}
      </span>
      <Button type="buttonDelete" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </div>
  );
};

export default TaskItem;
