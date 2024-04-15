import express from "express";
import { askQuestion } from "../controllers/question-controller.js";

const router = express.Router();

router.post("/ask", askQuestion);

export default router;
