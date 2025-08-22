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
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Filter Tasks
          </h2>
        </section>
      </main>
    </>
  );
};

export default App;
