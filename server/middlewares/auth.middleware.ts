import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { ExtendedRequest } from "../types/auth-request";

export const authMiddleware=async(req:ExtendedRequest,res:Response,next:NextFunction)=>{
    const authHeader=req.headers['authorization'];
    if(!authHeader) return res.status(401).json({error:'Acesso negado'})
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.JWT_SECRET as string,
        (err,decoded:any)=>{
            if(err){
                return res.status(401).json({error:"Token invalido"})
            }
            req.userId = decoded.id;
            next()
        }
    )
}