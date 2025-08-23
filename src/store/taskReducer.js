export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
        },
      ];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload.id);
    case "LOAD_TASKS":
      return action.payload.tasks;
    default:
      return state;
  }
};

// Initial state
export const initialTasks = [];
