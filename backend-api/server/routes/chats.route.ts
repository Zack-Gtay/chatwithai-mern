import express from "express";
import { getAllChats } from "../controllers/chats.contoller.js";



const router = express.Router();

router.get("/chats", getAllChats);


export default router;