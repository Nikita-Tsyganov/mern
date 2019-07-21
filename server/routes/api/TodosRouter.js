const router = require("express").Router();
const TodosController = require("../../controllers/TodosController.js");

// @route  GET api/todos
// @desc   Get All Todos
// access  Public
router.get("/", TodosController.all);

// @route  GET api/todos/:id
// @desc   Get A Single Todo
// access  Public
router.get("/:id", TodosController.find);

// @route  POST api/todos
// @desc   Create A Todo
// access  Public
router.post("/", TodosController.create);

// @route  PATCH api/todos/:id
// @desc   Update A Todo
// access  Public
router.patch("/:id", TodosController.update);

// @route  DELETE api/todos/:id
// @desc   Delete A Todo
// @access  Public
router.delete("/:id", TodosController.delete);

module.exports = router;
