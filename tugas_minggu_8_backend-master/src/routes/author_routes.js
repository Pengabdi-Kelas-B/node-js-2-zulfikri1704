const express = require("express")
const AuthorController = require("../controllers/author_controller")

const authorRouter = express.Router()

authorRouter.get("/books", AuthorController.getAll)
authorRouter.get("/book/:id", AuthorController.getById)
authorRouter.post("/book", AuthorController.create)
authorRouter.put("/book/:id", AuthorController.update)
authorRouter.delete("/book/:id", AuthorkController.delete)
authorRouter.post("/book/upload", AuthorController.uploadImage)



module.exports = authorRouter