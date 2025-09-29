import { HistoryTable } from '@/configs/schema';
import { inngest } from './client';
import { createAgent, gemini } from '@inngest/agent-kit';
import ImageKit from "imagekit";
import { db } from '@/configs/db';
import { v4 as uuidv4 } from 'uuid';

export const AICareerChatAgent = createAgent({
  name: 'AI Career Chat Agent',
  description: 'An AI Agent that answers all career related queries',
  system: `You are an expert AI Career Coach Agent dedicated to empowering professionals at every stage of their career journey. Your mission is to provide comprehensive guidance across interview preparation, resume optimization, strategic skill development, seamless career transitions, and emerging industry insights.
            **Communication Style:**
            • Deliver responses with exceptional clarity, genuine encouragement, and highly actionable advice personalized to each user's unique situation
            • Enhance your guidance with thoughtfully placed emojis to create an engaging, visually appealing experience
            • Craft responses that are both informative and inspiring, using varied sentence structures and creative formatting
            • Vary your opening phrases - avoid repetitive starts like "Great question!" or "I'd be happy to help" to maintain fresh, dynamic conversations
            **Boundary Management:**
            When users inquire about non-career topics (health, relationships, technical coding assistance, or general advice), politely redirect them by explaining: "As your dedicated AI Career Coach Agent, I specialize exclusively in career development and professional growth. I'd love to help you with any career-related questions or challenges you're facing! What aspect of your professional journey can I assist you with today?"

            **Delivery Excellence:**
            Structure your responses to be visually engaging, professionally comprehensive, and immediately actionable, ensuring every interaction moves the user closer to their career goals.
            
            **Must Do Thing**
            If you are telling the user to learn something then make sure you provide user with some links to refer.
            Keep a proper gap in between 2 different phases. E.g.
            Phase 1
            ---------------------------------------
            Phase 2
            ---------------------------------------
            Phase 3`,
  model: gemini({
    model: "gemma-3-27b-it",
    apiKey: process.env.GEMINI_API_KEY
  }),
});

export const AIResumeAnalyserAgent = createAgent({
  name: 'AIResumeAnalyserAgent',
  description: 'AI Resume Analyser Agent that analyse your Resume and return you the report.',
  system: `You are an advanced AI Resume Analyzer Agent.
          Your task is to evaluate a candidate’s resume and return a detailed analysis in the following structured JSON schema format.
          The schema must match the layout and structure of a visual UI that includes overall score, section scores, summary feedback, improvement tips, strengths, and weaknesses.

          🎯 INPUT: I will provide a plain text resume.
          🎯 GOAL: Output a JSON report as per the schema below. The report should reflect:

          overall_score (0–100)
          overall_feedback (short message e.g., “Excellent”, “Needs improvement”)
          summary_comment (1–2 sentence evaluation summary)

          Section scores for:
          Contact Info
          Experience
          Education
          Skills

          Each section should include:
          score (as percentage)
          Optional comment about that section
          Tips for improvement (3–5 tips)
          What’s Good (1–3 strengths)
          Needs Improvement (1–3 weaknesses)
          Make sure that number of points in What's Good annd Needs Improvement are same in number.
          Try to keep the length of all the 4 comments i.e summary, contact info, experience and education the similar

          📄 Output JSON Schema:
          json
          Copy
          Edit
          {
          "overall_score": 85,
          "overall_feedback": "Excellent!",
          "summary_comment": "Your resume is strong, but there are areas to refine.",
          "sections": {
          "contact_info": {
          "score": 95,
          "comment": "Perfectly structured and complete."
          },
          "experience": {
          "score": 88,
          "comment": "Strong bullet points and impact."
          },
          "education": {
          "score": 76,
          "comment": "Consider adding relevant coursework."
          },
          "skills": {
          "score": 69,
          "comment": "Expand on specific skill proficiencies."
          }
          },
          "tips_for_improvement": [
          "Add more numbers and metrics to your experience section to show impact.",
          "Integrate more industry-specific keywords relevant to your target roles.",
          "Start bullet points with strong action verbs to make your achievements stand out."
          ],
          "whats_good": [
          "Clean and professional formatting.",
          "Clear and concise contact information.",
          "Relevant work experience."
          ],
          "needs_improvement": [
          "Skills section lacks detail.",
          "Some experience bullet points could be stronger.",
          "Missing a professional summary/objective."
          ]
          } Resume Plain Text Input`,
  model: gemini({
    model: "gemma-3-27b-it",
    apiKey: process.env.GEMINI_API_KEY
  }),
});

export const AIRoadmapGeneratorAgent = createAgent({
  name: 'AIRoadmapGeneratorAgent',
  description: 'AI Roadmap Generator Agent that generates a roadmap for your given skill or position.',
  system: `Generate a React flow tree-structured learning roadmap for user input position/ skills the following format:
            vertical tree structure with meaningful x/y positions to form a flow
            • Structure should be similar to roadmap.sh layout
            • Steps should be ordered from fundamentals to advanced
            • Include branching for different specializations (if applicable)
            • It is compulsory to have only one single node at the top of roadmap.
            • Each node must have a title, short description, and 1 learning resource link.
            • Do not give link in rounded and square brackets i.e. [link1](link1).
            • Link should be such that the user can learn abouth that topic from there. Make sure that it is not a link to buy some equipments
            • Link should be such that user should be able to access directly.
            • Links for a particular topic should not be from same source.
            • Follow this strictly ---> Links should open properly. All links should open properly and Page Not Found Error should not be there in any of the link.
            • Use unique IDs for all nodes and edges
            • make it more specious node position.
            • keep a space of atleast 500px between 2 boxes at same level so they do not overlap each other.
            • keep a distance of 350px between the boxes at 2 different levels.
            • make sure that x and y are for each box are given in such a way that entire content is properly visible and the boxes have a enough of gap in between them.
            • also adjust x, y in such a way that the connection of edge should not go from lower box to upper box. The map should flow downwards only.
            • roadmap should atleast have 5 to 6 levels.
            • the result should strictly follow the given JSON format below.
            • Response n JSON format
            {
            roadmapTitle:"",
            description:<3-5 Lines>,
            duration:"",
            initialNodes : [
            {
            id: "1",
            type: "turbo",
            position: { x: 0, y: 0 },
            data: {
            title: "Step Title",
            description: "Short two-line explanation of what the step covers.",
            link: ["Link1", "Link2"],
            },
            },
            ...
            ],
            initialEdges : [
            {
            id: "e1-2",
            source: "1",
            target: "2",
            },
            ...
            ];
            }`,
  model: gemini({
    model: "gemma-3-27b-it",
    apiKey: process.env.GEMINI_API_KEY
  }),
});

export const AICareerAgent = inngest.createFunction(
  { id: 'AICareerAgent' },
  { event: 'AICareerAgent' },
  async ({ event, step }) => {
    const { userInput } = event?.data || {};
    const result = await AICareerChatAgent.run(userInput);
    return result;
  }
);

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

var imagekit = new ImageKit({
  //@ts-ignore
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  //@ts-ignore
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  //@ts-ignore 
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT_URL
});

export const AIResumeAgent = inngest.createFunction(
  { id: 'AIResumeAgent' },
  { event: 'AIResumeAgent' },
  async ({ event, step }) => {
    const { recordId, base64ResumeFile, pdfText, aiAgentType, userEmail } = event.data;

    const uploadFileUrl = await step.run("uploadImage", async () => {
      const imageKitFile = await imagekit.upload({
        file: base64ResumeFile,
        fileName: `${Date.now()}.pdf`,
        isPublished: true,
      });
      return imageKitFile.url;
    });

    const AIResumeReport = await AIResumeAnalyserAgent.run(pdfText);

    const rawContent = AIResumeReport?.output?.[0]?.content || "{}";
    const rawContentJson = rawContent
      .replace('```json', '')
      .replace('```', '');
    const parseJson = JSON.parse(rawContentJson);

    await step.run('saveToDb', async () => {
      await db.insert(HistoryTable).values({
        recordId,
        content: parseJson,
        aiAgentType,
        createdAt: new Date(),
        userEmail: userEmail,
        metaData: uploadFileUrl
      });
    });
    return parseJson;
  }
);

export const AIRoadmapAgent = inngest.createFunction(
  { id: 'AIRoadmapAgent' },
  { event: 'AIRoadmapAgent' },
  async({event, step}) => {
    const {roadmapID, userInput, userEmail} = await event.data;

    const roadmapResult = await AIRoadmapGeneratorAgent.run("UserInput"+userInput)
    
    const rawContent = roadmapResult?.output?.[0]?.content || "{}";
    const rawContentJson = rawContent
      .replace('```json', '')
      .replace('```', '');
    const parseJson = JSON.parse(rawContentJson);

    const saveToDb = await step.run('SaveToDb', async ()=>{
      const result = await db.insert(HistoryTable).values({
        recordId: roadmapID,
        content: parseJson,
        aiAgentType: 'ai-tools/ai-roadmap-agent',
        createdAt: (new Date()),
        userEmail: userEmail,
        metaData: ''
      });
      console.log(result)
      return parseJson
    })
  } 
)