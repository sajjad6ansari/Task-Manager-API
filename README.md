

# Task Manager API

This is a simple **Task Manager API** built with **Node.js**, **Express.js**, and **MongoDB**. It provides a RESTful API for managing tasks, allowing you to create, read, update, and delete tasks from a MongoDB database.

## Features

- **Create a task**: Add new tasks to the database.
- **Get all tasks**: Retrieve a list of all tasks.
- **Get a single task**: Retrieve a single task by its ID.
- **Update a task**: Update task details.
- **Delete a task**: Remove a task from the database.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Fast, unopinionated web framework for Node.js.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.



## API Endpoints

### Base URL: `/api/v1/tasks`

#### Get All Tasks

- **URL**: `/api/v1/tasks`
- **Method**: `GET`
- **Response**:
  - `200 OK`: Returns an array of all tasks.

#### Get a Single Task

- **URL**: `/api/v1/tasks/:id`
- **Method**: `GET`
- **Response**:
  - `200 OK`: Returns the task with the specified ID.
  - `404 Not Found`: If the task does not exist.

#### Create a New Task

- **URL**: `/api/v1/tasks`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Task Name",
    "completed": true
  }
  ```
- **Response**:
  - `201 Created`: Returns the created task.
  - `400 Bad Request`: If validation fails (e.g., missing task name).

#### Update a Task

- **URL**: `/api/v1/tasks/:id`
- **Method**: `PATCH`
- **Request Body**:
  ```json
  {
    "name": "Updated Task Name",
    "completed": true
  }
  ```
- **Response**:
  - `200 OK`: Returns the updated task.
  - `404 Not Found`: If the task does not exist.

#### Delete a Task

- **URL**: `/api/v1/tasks/:id`
- **Method**: `DELETE`
- **Response**:
  - `200 OK`: Returns confirmation of deletion.
  - `404 Not Found`: If the task does not exist.

## Project Structure

```bash
.
├── public                  # Frontend static files
├── controllers              # Business logic for tasks
│   └── tasks.js
├── db                      # Database connection
│   └── connect.js
├── models                  # Mongoose models
│   └── task.js
├── routes                  # Express routes
│   └── tasks.js
├── app.js                  # Main application file
├── package.json            # Project metadata and dependencies
└── .env                    # Environment variables
```


## Acknowledgments

- This project uses [Express](https://expressjs.com/) for routing and [Mongoose](https://mongoosejs.com/) for interacting with MongoDB.

---
