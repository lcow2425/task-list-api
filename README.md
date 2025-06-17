# Task List API

A simple Node.js API to manage tasks, used to practice Git version control best practices.

## Setup
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the server: `npm start`

## Endpoints
- GET `/tasks`: List all tasks
- POST `/tasks`: Create a task (body: `{ "title": "Task name" }`)
- PUT `/tasks/:id`: Update a task title
- DELETE `/tasks/:id`: Remove a task by ID

## Git Practices
This project is used to practice:
- Descriptive commit messages
- Feature Branch Workflow
- Code reviews via pull requests
- Resolving merge conflicts
- Frequent commits and pushes