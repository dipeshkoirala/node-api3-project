const express = require('express');
const users=require("./users-model")
const router = express.Router();
const { validateUserID, validateUser,validatePost } = require("../middleware/middleware")

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

router.post('/',validateUser(), (req, res,next) => {
  console.log("\033[31m[This is in response to \033[34m[POST Method]\033[31m from userRouter]")
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
   users.insert(req.body.name)
  .then((user)=>{
    res.status(201).json(user)
  }).catch((err)=>{
    next(err)
  })
})

router.put('/:id',validateUser(),validateUserID(), (req, res,next) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  users.update(req.params.id, req.body)
  .then((user) => {
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({
        message: "The user could not be found",
      })
    }
  })
  .catch((error) => {
    next(error)
  })

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