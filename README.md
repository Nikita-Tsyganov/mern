# MERN - A MERN stack CRUD app

## Description

This is a basic MERN stack CRUD app.
It uses React with Redux (Redux coming soon) for frontend, Node.js with Express for backend and MongoDB for a database.
Bootstrap with SASS are used for styling purposes. (will be implemented soon as well)

## Getting Started

### Pre-requisites

- Have [Node.js](https://nodejs.org/en/) installed
- Have [MongoDB](https://www.mongodb.com/download-center/community) installed and running

### How to run

1. Clone or download the repository
2. Navigate to the repository's root folder in your terminal
3. Run `npm install` command
4. Run `npm run seed` command
5. Run `npm start` command

The website will automatically open in your browser at [http://localhost:3001](http://localhost:3001)

## Backend Server API

Server resides at [http://localhost:5000](http://localhost:5000)

### Available Endpoints

#### `GET` Endpoints

##### Get All Todos

```markdown
http://localhost:5000/api/todos
```

##### Get Single Todo

```markdown
http://localhost:5000/api/todos/<todo_id>
```

#### `POST` Endpoints

##### Create Todo

```markdown
http://localhost:5000/api/todos
```

Parameters

```markdown
{
"title": <todo_title>
}
```

#### `PATCH` Endpoints

##### Update Todo

```markdown
http://localhost:5000/api/todos/<todo_id>
```

Parameters

```markdown
{
"title": <todo_title>,
"completed": <true/false>
}
```

#### `DELETE` Endpoints

#### Delete Todo

```markdown
http://localhost:5000/api/todos/<todo_id>
```
