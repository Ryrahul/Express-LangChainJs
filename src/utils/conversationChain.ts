import "dotenv/config";

import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { combineDocs } from "./combineDocumnets";
import { retriever } from "./retriver";

const openAIApiKey: string = process.env.OPEN_AI_API_KEY || "";
const llm = new ChatOpenAI({ openAIApiKey, temperature: 0, streaming: true });

const standaloneQuestionTemplate = `Given  question, convert the question to a standalone question. 

question: {question} 
standalone question:`;
const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
  standaloneQuestionTemplate
);

const answerTemplate: string = `You are a helpful and enthusiastic support bot who can answer a given question based on the context provided  . Try to find the answer in the context and evaluate the context properly and answer  . If you really don't know the answer, say "I'm sorry, I don't know the answer to the question , I'm here to provide information and answer questions related to the context". Don't try to make up an answer. Always speak as if you were chatting to a friend and remeber to answer question like hello politely and other questions like how are you.
context: {context}


question: {question}
answer: `;
const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

const standaloneQuestionChain = standaloneQuestionPrompt
  .pipe(llm)
  .pipe(new StringOutputParser());

const retrieverChain = RunnableSequence.from([
  (prevResult) => prevResult.standalone_question,
  retriever,
  combineDocs,
]);

const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

const chain = RunnableSequence.from([
  {
    standalone_question: standaloneQuestionChain,
    original_input: new RunnablePassthrough(),
  },
  {
    context: retrieverChain,
    question: ({ original_input }) => original_input.question,
  },
  answerChain,
]);

export { chain };
