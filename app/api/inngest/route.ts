import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { AICareerAgent, AIResumeAgent, AIRoadmapAgent } from "@/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    AICareerAgent,
    AIResumeAgent,
    AIRoadmapAgent
  ],
});
