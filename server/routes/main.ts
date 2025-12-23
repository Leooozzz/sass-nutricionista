import { Router } from "express";
import * as userController from '../controllers/user.controller'
import * as appoimentsController from '../controllers/appoiments.controller'
import { authMiddleware } from "../middlewares/auth.middleware";
export const router=Router()


router.post('/user/register',userController.register)
router.post('/user/login',userController.login)


router.post('/appoiments',authMiddleware,appoimentsController.appoiments)
router.get('/nutricionistas',authMiddleware,appoimentsController.getNutricionista)

router.get('/ping',(req,res)=>{
    res.json({pong:true})
})



