import { chain } from "../utils/conversationChain.js";

const askQuestion = async (req, res) => {
  const { question } = req.body;
  const response = await chain.invoke({
    question,
    // conv_history: convHistory(),
  });
  //   convHistory().push(response);
  res.json(response);
};

export { askQuestion };
