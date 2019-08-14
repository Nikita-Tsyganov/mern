const router = require("express").Router();
const UserController = require("../../controllers/UserController.js");

// @route  GET api/users
// @desc   Get All Users
// access  Public
router.get("/", UserController.all);

// @route  GET api/users/:id
// @desc   Get A Single User
// access  Public
router.get("/:id", UserController.find);

// @route  POST api/users
// @desc   Create A User
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

// @route  POST api/users/signIn
// @desc   Verify user credentials
// access  Public
router.post("/signIn", UserController.signIn);

module.exports = router;
