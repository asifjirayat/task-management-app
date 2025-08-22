import React from "react";

const App = () => {
  return (
    <>
      <header className="bg-white shadow-sm flex flex-col">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Task Management App
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Implementing React Hooks
          </p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex flex-col flex-grow min-h-screen">
        {/* Search & Controls */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Search & Controls
          </h2>
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer">
              Add Task
            </button>
          </div>
        </section>
        {/* Filter Tasks */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Filter Tasks
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 border-2 border-blue-300 rounded-lg font-medium capitalize transition-colors">
              All
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent rounded-lg font-medium capitalize transition-colors cursor-pointer">
              Pending
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent rounded-lg font-medium capitalize transition-colors cursor-pointer">
              Completed
            </button>
          </div>
        </section>
        {/* Task List*/}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Task List
          </h2>
          <div className="space-y-3">
            {/* Task 1 */}
            <div className="flex items-center p-4 border border-gray-200 rounded-lg">
              <input type="checkbox" className="mr-3 w-4 h-4 text-blue-600" />
              <span className="flex-1 text-gray-900">
                Learn React useState hook
              </span>
              <button className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                Delete
              </button>
            </div>
            {/* Task 2 */}
            <div className="flex items-center p-4 border border-gray-200 rounded-lg">
              <input type="checkbox" className="mr-3 w-4 h-4 text-blue-600" />
              <span className="flex-1 text-gray-900">
                Setup project with Vite
              </span>
              <button className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                Delete
              </button>
            </div>
            {/* Task 3 */}
            <div className="flex items-center p-4 border border-gray-200 rounded-lg">
              <input type="checkbox" className="mr-3 w-4 h-4 text-blue-600" />
              <span className="flex-1 text-gray-900">
                Learn React useState hook
              </span>
              <button className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                Delete
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
