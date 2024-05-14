# ChatBot API with LangChain and Express.js

This project provides an API that exposes a chatbot using LangChain with [Express.js](https://expressjs.com/). The chatbot uses a Retrieval-Augmented Generation (RAG) approach to retrieve relevant information . This README outlines the setup, configuration, and usage of the API.


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ryrahul/Express-LangChainJs.git
   cd chatbot-api

## Configuration

The API uses environment variables for configuration. Create a `.env` file in the project root and see the .env.example for reference

## Usage

After installation and configuration, you can start the API:

```bash
npm start
```

### Endpoints:

- **POST /chat*
  - Request body: `{ "message":"Your Message" }`

### Document For Rag Retrival
- Navigate to -->> src/utils/save-to-db.ts
- Add Your File Path

