const express = require('express');
const users=require("./users-model")
const router = express.Router();

router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  console.log("\033[31m[This is in response to \033[34m[GET Method]\033[31m from userRouter]")
  const options = {
		sortBy: req.query.sortBy,
		limit: req.query.limit,
	}

	users.get(options)
		.then((users) => {
			res.status(200).json(users)
		})
		.catch((error) => {
		
			next(error)

		
		})
});

router.get('/:id', (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
});

router.post('/', (req, res) => {
  console.log("\033[31m[This is in response to \033[34m[POST Method]\033[31m from userRouter]")
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports=router