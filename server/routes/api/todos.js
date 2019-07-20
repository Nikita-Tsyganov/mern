const router = require("express").Router();
const DB = require("../../database/DB.js");

// Get All Todos
router.get("/", (req, res) => {
  DB.all().then(todos => res.json(todos));
});

// Get Single Todo
router.get("/:id", (req, res) => {
  DB.find(req.params.id).then(todo => res.json(todo));
});

// Create Todo
router.post("/", (req, res) => {
  DB.create(req.body.title).then(todo => res.json(todo));
});

// Update Todo
router.patch("/:id", (req, res) => {
  DB.update({
    id: req.params.id,
    title: req.body.title,
    completed: req.body.completed
  }).then(todo => res.json(todo));
});

// Delete Todo
router.delete("/:id", (req, res) => {
  DB.delete(req.params.id).then(todo => res.json(todo));
});

module.exports = router;
