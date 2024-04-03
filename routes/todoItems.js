const { Router } = require("express");
const {getAllTodos,getOneTodo,createNewTodo,deleteTodo,updateTodo} = require("../controllers/todo");

const router = Router();
 
router.get("/", getAllTodos);
  
router.get("/:id", getOneTodo);

router.post("/", createNewTodo);

router.delete("/:id", deleteTodo);

router.put("/:id", updateTodo);
module.exports = router;