# MERN - A MERN stack CRUD app

## Getting Started

### Pre-requisites

- Have [Node.js](https://nodejs.org/en/) installed

### How to run

1. Clone or download the repository
2. Navigate to the repository's root folder in your terminal
3. Run `npm install` command
4. Run `npm start` command

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
