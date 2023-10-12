import { config } from "dotenv";
import { OpenAI } from "langchain/llms/openai";

config();

/**
 * An instance of the OpenAI library.
 * @typedef {Object} OpenAI
 * @property {string} openAIApiKey - The API key for OpenAI.
 * @property {string} modelName - The name of the model to use.
 * @property {number} temperature - Determines the randomness of the model's output.
 */

/**
 * Creates a new instance of OpenAI with the provided configuration.
 * @type {OpenAI} llm
 */
const llm = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-3.5-turbo",
  temperature: 0.7,
});

export default llm;
