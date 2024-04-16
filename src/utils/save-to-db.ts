// import "dotenv/config";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// import { promises as fs } from "fs";

// import { createClient } from "@supabase/supabase-js";
// const client = createClient(sbApiUrl, sbApiKey);

// const text = await fs.readFile("./abc.txt", "utf-8");
// const splitter = new RecursiveCharacterTextSplitter({
//   chunkSize: 500,
//   chunkOverlap: 50,
// });
// const openAIApiKey = process.env.OPEN_AI_API_KEY;

// const output = await splitter.createDocuments([text]);
// await SupabaseVectorStore.fromDocuments(
//   output,
//   new OpenAIEmbeddings({ openAIApiKey }),
//   {
//     client,
//     tableName: "documents",
//   }
// );
// console.log("succes");
