Sure, here's a sample README.md file:

# Todo App

A simple Todo app built with React.

## Getting Started

### Prerequisites

- Node.js (v14.15.4 or higher)

### Installing Dependencies

To install the dependencies, run:

```
npm install
```

### Running the App

To run the app, run:

```
npm start
```

The app will be available at http://localhost:3000.

### Running the App with Docker

To run the app with Docker, first build the Docker image:

```
docker build -t todo-app .
```

Then run the Docker container:

```
docker run -p 3000:3000 todo-app
```

The app will be available at http://localhost:3000.

## Files

- `src/App.js`: The main component of the app.
- `src/AddTodo.js`: The component for adding a new todo.
- `src/TodoList.js`: The component for displaying the list of todos.
- `src/TodoItem.js`: The component for displaying a single todo item.
- `Dockerfile`: The Dockerfile for building the Docker image of the app.