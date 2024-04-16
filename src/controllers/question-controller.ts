import { chain } from "../utils/conversationChain";
import { Request, Response } from "express";

const askQuestion = async (req: Request, res: Response) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({
      message: "Question is Required",
    });
  }
  const response = await chain.invoke({
    question,
  });

  res.status(200).json({ data: response });
};

export { askQuestion };
