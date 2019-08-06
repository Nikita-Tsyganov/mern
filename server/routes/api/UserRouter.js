const router = require("express").Router();
const UserController = require("../../controllers/UserController.js");

// @route  GET api/todos
// @desc   Get All Todos
// access  Public
router.get("/", UserController.all);

// @route  GET api/todos/:id
// @desc   Get A Single Todo
// access  Public
router.get("/:id", UserController.find);

// @route  POST api/todos
// @desc   Create A Todo
// access  Public
router.post("/", UserController.create);

// @route  PATCH api/todos/:id
// @desc   Update A Todo
// access  Public
router.patch("/:id", UserController.update);

// @route  DELETE api/todos/:id
// @desc   Delete A Todo
// @access  Public
router.delete("/:id", UserController.delete);

module.exports = router;
