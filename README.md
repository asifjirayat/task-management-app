# React Task Management App

A modern, feature-rich task management application built with React, featuring persistent local storage, real-time filtering, and a clean, responsive interface.

![React Task Management App](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Built with Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Live Demo

**[🌐 View Live Demo](https://task-management-app-chi-lac.vercel.app/)**

## ✨ Features

### Core Functionality

- ✅ **Create Tasks** - Add new tasks with automatic text capitalization
- ✅ **Toggle Completion** - Mark tasks as completed/pending with visual feedback
- ✅ **Delete Tasks** - Remove tasks permanently
- 🔍 **Real-time Search** - Filter tasks by text content instantly

### Advanced Features

- 📊 **Smart Filtering** - View All, Pending, or Completed tasks
- 📈 **Live Statistics** - Real-time count of total, pending, and completed tasks
- 💾 **Data Persistence** - Tasks automatically saved to localStorage
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🎨 **Clean UI** - Modern, intuitive interface with smooth interactions

### Technical Highlights

- **React Hooks** - Built with useState, useEffect, and useReducer
- **Custom Hooks** - Reusable logic with `useTaskManager`
- **Component Architecture** - Modular, maintainable codebase
- **Error Handling** - Graceful localStorage error recovery
- **Professional Patterns** - Clean separation of concerns

## Project Structure

```bash
task-management-app/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Section.jsx
│   │   ├── StatCard.jsx
│   │   └── TaskItem.jsx
│   ├── hooks/
│   │   └── useTaskManager.js
│   ├── index.css
│   ├── main.jsx
│   └── store/
│       └── taskReducer.js
└── vite.config.js

```

## Installation & Setup

### Prerequisites

- Node.js (version 16.0 or higher)
- npm or yarn

### Clone the repository

```bash
git clone https://github.com/asifjirayat/task-management-app
cd task-management-app
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser

## Usage

#### **Adding Tasks**

- Click "Add Task" button
- Enter task description
- Click "Save" to add (automatically capitalizes first letter)

#### **Managing Tasks**

- Check/uncheck checkbox to toggle completion
- Click "Delete" button to remove tasks
- Tasks automatically save to localStorage

#### **Finding Tasks**

- Use search bar to filter by text content
- Use filter buttons (All/Pending/Completed) for status
- Combine search and filters for precise results

#### **Viewing Progress**

- Statistics cards update automatically
- Visual feedback for completed tasks (strikethrough)
- Real-time count updates

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

    1. Fork the repository
    2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
    3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
    4. Push to the branch (`git push origin feature/AmazingFeature`)
    5. Open a Pull Request

## 📧 Contact

- **Project Link** - [https://github.com/asifjirayat/task-management-app](https://github.com/asifjirayat/task-management-app)
- **Live Demo** - [https://task-management-app-chi-lac.vercel.app/](https://task-management-app-chi-lac.vercel.app/)

## 🙏 Acknowledgments

- React team for the excellent framework
- Tailwind CSS for utility-first styling
- Vite for lightning-fast development experience
- Vercel for seamless deployment
- Open source community for inspiration

**Built with ❤️ using React, modern hooks, and best practices**

⭐ **Don't forget to star this repo if you found it helpful!**

**[🌐 Try the Live Demo](https://task-management-app-chi-lac.vercel.app/)**
