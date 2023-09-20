import { PromptTemplate } from 'langchain/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';

const parser = StructuredOutputParser.fromNamesAndDescriptions({
    careerProspect1: "First unique career prospect that aligns closely with the user's aspiration and course.",
    careerPath1: "Detailed career progression path from a junior role to a senior role for the suggested career.",
    skill1_1: "List the first essential skill required for each job role in the career path. Be highly specific, considering the nature of the job and the tools or platforms predominantly used in that role.",
    skill1_2: "List the second essential skill required for each job role in the career path. Be highly specific, considering the nature of the job and the tools or platforms predominantly used in that role.",
    skill1_3: "List the third essential skill required for each job role in the career path. Be highly specific, considering the nature of the job and the tools or platforms predominantly used in that role.",
    
    careerProspect2: "Second unique career prospect that aligns with the user's aspiration and course.",
    careerPath2: "Detailed career progression path from a junior role to a senior role for the suggested career.",
    skill2_1: "List the first essential skill required for each job role in the career path. Be highly specific, considering the nature of the job and the tools or platforms predominantly used in that role.",
    skill2_2: "List the second essential skill required for each job role in the career path. Be highly specific, considering the nature of the job and the tools or platforms predominantly used in that role.",
    skills2_3: "List the third essential skill required for each job role in the career path. Be highly specific, considering the nature of the job and the tools or platforms predominantly used in that role.",
    
    careerProspect3: "Third unique career prospect tailored to the user's aspiration and course.",
    careerPath3: "Detailed career progression path from a junior role to a senior role for the suggested career.",
    skill3_1: "List the first essential skill required for each job role in the career path. Be highly specific, considering the nature of the job and the tools or platforms predominantly used in that role.",
    skill3_2: "List the second essential skill required for each job role in the career path. Be highly specific, considering the nature of the job and the tools or platforms predominantly used in that role.",
    skill3_3: "List the third essential skill required for each job role in the career path. Be highly specific, considering the nature of the job and the tools or platforms predominantly used in that role.",
});

const formatInstructions = parser.getFormatInstructions();

const prompt = new PromptTemplate({
    template: `
    Given a user's aspiration of {aspiration} and their university course in {course}, identify three unique career prospects that align closely with both. Each career prospect should be tailored to the user's aspiration and not be a generic role commonly associated with the course industry.

    For each career prospect, provide:
    - The name of the career.
    - A progression path from a junior role to a senior role.
    - The top 3 essential skills required for each role in the career path, emphasizing the specific tools, platforms, or methodologies crucial for the role.
    
    Ensure that the suggested careers truly cater to the user's aspirations.

    Remove any '\n' or '\t' in your response.
    {format_instructions}

    Your response:
    `,
    inputVariables: ["aspiration", "course"],
    partialVariables: { format_instructions: formatInstructions },
});

export default { parser, prompt }