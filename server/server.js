const express = require("express");
const cors = require("cors");
const app = express();

// CORS Header Middleware
app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Todos API Routes
app.use("/api/todos", require("./routes/api/todos.js"));

const PORT = /* process.env.PORT ||  */ 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
