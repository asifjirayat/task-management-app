import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Button from "./components/Button.jsx";
import TaskItem from "./components/TaskItem.jsx";
import StatCard from "./components/StatCard.jsx";
import Footer from "./components/Footer.jsx";
import { useTaskManager } from "./hooks/useTaskManager.js";

const App = () => {
  const {
    searchTerm,
    activeFilter,
    showAddForm,
    newTaskText,
    tasks,
    filteredTasks,
    handleSearchInput,
    handleFilterChange,
    handleToggleAddTask,
    handleTaskInput,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
  } = useTaskManager();
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
