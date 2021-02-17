const express = require('express');
const posts=require('./posts-model')

const {validateUserID,validateUser,validatePost}=require("../middleware/middleware")
const router = express.Router();

router.get('/', (req, res,next) => {
  // DO YOUR MAGIC
  console.log("\033[35m[This is in response to \033[34m[GET Method]\033[31m of PostRouter]")
  const options = {
		sortBy: req.query.sortBy,
		limit: req.query.limit,
	}

	posts.get(options)
		.then((users) => {
			res.status(200).json(users)
		})
		.catch((error) => {
		
			next(error)

		
		})
});

router.get('/:id', (req, res) => {
  // DO YOUR MAGIC
});

// do not forget to export the router
module.exports = router
