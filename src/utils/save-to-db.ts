// import "dotenv/config";
// import { promises as fs } from "fs";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// import { CSVLoader } from "langchain/document_loaders/fs/csv";

// import { createClient } from "@supabase/supabase-js";
// import { OpenAIEmbeddings } from "@langchain/openai";
// import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
// const sbApiKey: string = process.env.SUPABASE_API_KEY || "";
// const sbUrl: string = process.env.SUPABASE_API_URL || "";
// // import { PDFLoader } from "langchain/document_loaders/fs/pdf";

// const client = createClient(sbUrl, sbApiKey);
// (async () => {
//   // const loader = new CSVLoader("./datafile.csv");
//   // const docs = await loader.load();

//   // const loader = new PDFLoader("./fire.pdf");

//   // const docs = await loader.load();

//   const openAIApiKey = process.env.OPEN_AI_API_KEY;

//   // const output = await splitter.createDocuments([docs]);
//   await SupabaseVectorStore.fromDocuments(
//     docs,
//     new OpenAIEmbeddings({ openAIApiKey }),
//     {
//       client,
//       tableName: "documents",
//     }
//   );
//   console.log("succes");
// })();
