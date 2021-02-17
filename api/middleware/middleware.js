const users=require("../users/users-model")
const posts=require("../posts/posts-model")

function logger(req, res, next) {
  // DO YOUR MAGIC
  const time=new Date().toISOString()
  console.log(`[${time}] ${req.hostname} ${req.ip} ${req.method} ${req.url}`)
  next()
}


function validateUserId(req, res, next) {
  // DO YOUR MAGIC

  return (req, res, next) => {
		users.getUserById(req.params.id)
			.then((user) => {
				if (user) {
					// set a value to the request so it can be
					// accessed later in the middleware stack
					req.user = user
					next()
				} else {
					res.status(400).json({
						message: "Invalid user Id",
					})
				}
			})
			.catch((error) => {
				next(error)
			})
	}
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC

  return (req, res, next) => {

    if (!req.body.name) {
        res.status(400).json({
            message: "Missing user name",
        })
    } else {
         users.insert(req.body.name)
        next()
    }
}
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC

  return (req,res,next)=>{
    if(!req.body){
        res.status(400).json({
            message:"missing post data"
        })
    }
    else if(!req.body.text){
        res.status(400).json({
            message:"missing required text"
        })
    }
    else{
        next()
    }
}
}

// do not forget to expose these functions to other modules


module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}