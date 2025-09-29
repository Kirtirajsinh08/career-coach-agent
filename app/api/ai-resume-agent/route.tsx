import { NextRequest, NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { inngest } from "@/inngest/client";
import axios from "axios";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    // ⬇️ receive the form data
    const formData = await req.formData();
    const resumeFile: any = formData.get("resumeFile");
    const recordId = formData.get("recordId");

    // ⬇️ ensure Clerk user is fetched correctly
    const user = await currentUser();
    const userEmail =
      user?.primaryEmailAddress?.emailAddress ??
      user?.emailAddresses?.[0]?.emailAddress ??
      null;

    if (!resumeFile) {
      return NextResponse.json({ error: "No resume file provided" }, { status: 400 });
    }

    // ⬇️ load the PDF text
    const loader = new WebPDFLoader(resumeFile);
    const docs = await loader.load();
    console.log("Extracted PDF text:", docs[0]);

    // ⬇️ convert to base64
    const arrayBuffer = await resumeFile.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

    // ⬇️ send to Inngest with the right userEmail
    const resultIds = await inngest.send({
      name: "AIResumeAgent",
      data: {
        recordId: recordId,
        base64ResumeFile: base64,
        pdfText: docs[0]?.pageContent,
        aiAgentType: "ai-tools/ai-resume-analyser",
        userEmail: userEmail, // ✅ only email string
      },
    });

    const runId = resultIds?.ids[0];

    // ⬇️ poll until Inngest run completes
    let runStatus;
    while (true) {
      runStatus = await getRuns(runId);

      if (runStatus?.data?.[0]?.status === "Completed") break;

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    return NextResponse.json(runStatus.data?.[0]?.output);
  } catch (err) {
    console.error("Resume upload error:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function getRuns(runId: string) {
  const result = await axios.get(
    process.env.INNGEST_SERVER_HOST + "/v1/events/" + runId + "/runs",
    {
      headers: {
        Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
      },
    }
  );

  return result.data;
}
