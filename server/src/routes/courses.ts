import { config } from 'dotenv';
config();
import express, { Request, Response } from 'express';
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from 'langchain/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { CourseModel, searchCourses } from '../models/Course';
import EmploymentModel from '../models/Employment';
import IntakeModel from '../models/Intake';
const router = express.Router();
router.use(express.json());

const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY!,
    modelName: "gpt-3.5-turbo",
    temperature: 0.7,
 });

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

router.post('/:course/submit', async (req: Request, res: Response) => {
    try {
        const userAspiration = req.body.aspiration;
        const userCourse = req.params.course;
        
        // Format the prompt with user input
        const input = await prompt.format({
            aspiration: userAspiration,
            course: userCourse
        });

        const response = await llm.call(input);
        console.log(response);
        const structuredResponse = await parser.parse(response);
        res.json(structuredResponse);
        
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/:course', async (req: Request, res: Response) => {
    try {
        const course = await CourseModel.findOne({ course_name: decodeURIComponent(req.params.course)});
        if (!course) {
            return res.status(400).send("Course does not exist.");
        }
        res.json(course);
    } catch (error) {
        res.status(500).send("Error retrieving course.");
    }
});

router.post('/:degree/employment', async (req: Request, res: Response) => {
    try {
        const employment = await EmploymentModel.findOne({ degree: decodeURIComponent(req.params.degree),
                                                            year: req.body.year });
        if (!employment) {
            return res.status(400).send("Employment does not exist.");
        }
        res.json(employment);
    } catch (error) {
        res.status(500).send("Error retrieving employment.");
    }
});

router.post('/:course/intake', async (req: Request, res: Response) => {
    try {
        const intake = await IntakeModel.findOne({ course: decodeURIComponent(req.params.course),
                                                    year: req.body.year });
        if (!intake) {
            return res.status(400).send("Intake does not exist.");
        }
        res.json(intake);
    } catch (error) {
        res.status(500).send("Error retrieving intake.");
    }
});

router.get('/search', async (req, res) => {
    try {
        const query = req.query.q as string;
        const results = await searchCourses(query);
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: "An error occurred during the search." });
    }
});

export default router;


