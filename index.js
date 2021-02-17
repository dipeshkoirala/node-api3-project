// require your server and launch it


const express = require("express")
 const server= require("./api/server")



const postsRouter = require("./api/posts/posts-router")

const userRouter=require("./api/users/users-router")

const port = 4444

// server.use(express.json())


server.use("/api/post",postsRouter)
server.use("/api/users",userRouter)


server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong, please try again later.",
	})
})
 
server.listen(port, () => {
	console.log("\033[1m\033\4mServer running at http://localhost:"+port)
})

