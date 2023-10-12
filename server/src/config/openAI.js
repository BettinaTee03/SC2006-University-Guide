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
 * @type {OpenAI}
 */
const llm = {
  /**
   * The API key for OpenAI.
   * @type {string}
   */
  openAIApiKey: process.env.OPENAI_API_KEY,

  /**
   * The name of the model to use.
   * @type {string}
   */
  modelName: "gpt-3.5-turbo",

  /**
   * Determines the randomness of the model's output.
   * @type {number}
   */
  temperature: 0.7,
};

export default llm;
