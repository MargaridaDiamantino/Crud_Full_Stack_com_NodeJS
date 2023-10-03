import  Express   from "express";
import {getUsers,updateUser,deleteUser,addUser} from "../controllers/users.js"
const router = Express.Router()
router.get("/",getUsers)
router.post("/",addUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)

export default router