import { Router } from "express";
import * as authController from '../controllers/user.controller'

export const router=Router()


router.post('/user/register',authController.register)



router.get('/ping',(req,res)=>{
    res.json({pong:true})
})



