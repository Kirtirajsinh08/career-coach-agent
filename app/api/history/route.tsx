import { NextResponse } from "next/server";
import { db } from "../../../configs/db";
import { HistoryTable } from "../../../configs/schema";
import { currentUser } from "@clerk/nextjs/server";
import { asc, eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { content, recordId, aiAgentType } = await req.json();
  const user = await currentUser();

  try {
    const result = await db.insert(HistoryTable).values({
      recordId,
      content: content ?? [], // ensure always array
      userEmail: user?.primaryEmailAddress?.emailAddress ?? null,
      createdAt: new Date(), // proper Date object
      aiAgentType: aiAgentType ?? null, // ensure safe
    });

    return NextResponse.json(result);
  } catch (e) {
    console.error("POST /api/history error:", e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const { content, recordId } = await req.json();

  try {
    const result = await db
      .update(HistoryTable)
      .set({ content: content ?? [] })
      .where(eq(HistoryTable.recordId, recordId));

    return NextResponse.json(result);
  } catch (e) {
    console.error("PUT /api/history error:", e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const recordId = searchParams.get("recordId");

  try {
    if (recordId) {
      const result = await db.select().from(HistoryTable).where(eq(HistoryTable.recordId, recordId));

      return NextResponse.json({
        content: result[0]?.content ?? [],
        aiAgentType: result[0]?.aiAgentType ?? null,
        recordId: result[0]?.recordId ?? null,
        metaData: result[0]?.metaData ?? null
      });
    }

    return NextResponse.json({ content: [] });
  } catch (e) {
    console.error("GET /api/history error:", e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
