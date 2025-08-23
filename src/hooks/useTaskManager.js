import { useEffect, useState, useReducer } from "react";
import { initialTasks, taskReducer } from "../store/taskReducer.js";

export const useTaskManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

  // Initialize tasks from localStorage
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks, () => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
      return initialTasks;
    }
  });

  // Sync tasks from localStorage
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error);
    }
  }, [tasks]);

  // Handle search input
  const handleSearchInput = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  // Handle filter selection
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Handle add task
  const handleToggleAddTask = () => {
    setShowAddForm(!showAddForm);
  };

  // Handle task input
  const handleTaskInput = (event) => {
    const { value } = event.target;
    setNewTaskText(value);
  };

  // Handle new tasks added
  const handleAddTask = () => {
    if (newTaskText.trim()) {
      const capitalizedText =
        newTaskText.trim().charAt(0).toUpperCase() +
        newTaskText.trim().slice(1);

      dispatch({
        type: "ADD_TASK",
        payload: { text: capitalizedText },
      });

      setNewTaskText("");
      setShowAddForm(false);
    }
  };

  // Handle task completion toggle
  const handleToggleTask = (taskId) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: { id: taskId },
    });
  };

  // Handle task deletion
  const handleDeleteTask = (taskId) =>
    dispatch({ type: "DELETE_TASK", payload: { id: taskId } });

  // Function to get filtered tasks
  const getFilteredTasks = () => {
    let filteredTasks = tasks;

    // Apply status filter
    if (activeFilter === "pending")
      filteredTasks = filteredTasks.filter((task) => !task.completed);
    else if (activeFilter === "completed")
      filteredTasks = filteredTasks.filter((task) => task.completed);

    if (searchTerm.trim()) {
      filteredTasks = filteredTasks.filter((task) =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredTasks;
  };

  const filteredTasks = getFilteredTasks();

  return {
    // State
    searchTerm,
    activeFilter,
    showAddForm,
    newTaskText,
    tasks,
    filteredTasks,

    // Handlers
    handleSearchInput,
    handleFilterChange,
    handleToggleAddTask,
    handleToggleTask,
    handleTaskInput,
    handleAddTask,
    handleDeleteTask,
  };
};
