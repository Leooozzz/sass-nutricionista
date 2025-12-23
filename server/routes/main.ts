import { Router } from "express";
import * as userController from '../controllers/user.controller'
import * as appoimentsController from '../controllers/appoiments.controller'
import * as nutricionistaController from '../controllers/nutricionista.controller'
import { authMiddleware } from "../middlewares/auth.middleware";
export const router=Router()


router.post('/user/register',userController.register)
router.post('/user/login',userController.login)


router.post('/appointments',authMiddleware,appoimentsController.appoiments);
router.get('/appointments',authMiddleware,appoimentsController.getAppoiments);



router.get('/nutricionistas',authMiddleware,nutricionistaController.getNutricionista);

router.get('/ping',(req,res)=>{
    res.json({pong:true})
})



