import { Router } from "express";
import * as userController from '../controllers/user.controller'

export const router=Router()


router.post('/user/register',userController.register)
router.post('/user/login',userController.login)


router.get('/ping',(req,res)=>{
    res.json({pong:true})
})



