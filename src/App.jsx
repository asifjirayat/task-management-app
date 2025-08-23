import { act, useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Button from "./components/Button.jsx";
import TaskItem from "./components/TaskItem.jsx";
import StatCard from "./components/StatCard.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAddForm, setShowAddForm] = useState(false);

  // Initialize tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
      return [];
    }
  });

  const [newTaskText, setNewTaskText] = useState("");

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
      const newTask = {
        id: Date.now(),
        text: capitalizedText,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setNewTaskText("");
      setShowAddForm(false);
    }
  };

  // Handle task completion toggle
  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle task deletion
  const handleDeleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

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

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex flex-col flex-grow min-h-screen">
        {/* Search & Controls */}
        <Section title="Search & Controls">
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                onChange={handleSearchInput}
                value={searchTerm}
              />
            </div>
            <Button onClick={handleToggleAddTask}>
              {showAddForm ? "Cancel" : "Add Task"}
            </Button>
          </div>
        </Section>

        {/* Add Task Form */}
        {showAddForm && (
          <Section title="Add New Task">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter task description..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={newTaskText}
                onChange={handleTaskInput}
              />
              <Button onClick={handleAddTask}>Save Task</Button>
              <Button type="buttonUnselected" onClick={handleToggleAddTask}>
                Cancel
              </Button>
            </div>
          </Section>
        )}

        {/* Filter Tasks */}
        <Section title="Filter Tasks">
          <div className="flex gap-2">
            <Button
              type={
                activeFilter === "all" ? "buttonSelected" : "buttonUnselected"
              }
              onClick={() => handleFilterChange("all")}
            >
              All
            </Button>
            <Button
              type={
                activeFilter === "pending"
                  ? "buttonSelected"
                  : "buttonUnselected"
              }
              onClick={() => handleFilterChange("pending")}
            >
              Pending
            </Button>
            <Button
              type={
                activeFilter === "completed"
                  ? "buttonSelected"
                  : "buttonUnselected"
              }
              onClick={() => handleFilterChange("completed")}
            >
              Completed
            </Button>
          </div>
        </Section>

        {/* Task List*/}
        <Section title="Task List">
          <div className="space-y-3">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={handleToggleTask}
                  onDelete={handleDeleteTask}
                />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                {searchTerm || activeFilter !== "all"
                  ? "No tasks match your current filters"
                  : "No tasks yet. Add your first task above!"}
              </div>
            )}
          </div>
        </Section>

        {/* Task Stats */}
        <Section title="Task Statistics">
          <div className="grid grid-cols-3 gap-4 text-center">
            <StatCard tasksCount={tasks.length} label="Total Tasks" />
            <StatCard
              tasksCount={tasks.filter((task) => !task.completed).length}
              label="Pending"
              type="pending"
            />
            <StatCard
              tasksCount={tasks.filter((task) => task.completed).length}
              label="Completed"
              type="completed"
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default App;
