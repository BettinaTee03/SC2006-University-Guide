import { config } from 'dotenv';
import { OpenAI } from "langchain/llms/openai";
config();

const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo",
    temperature: 0.7,
 });

 export default llm;