import { db } from "@/configs/db";
import { HistoryTable } from "@/configs/schema";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server"
import { eq, asc, desc } from "drizzle-orm";

export async function GET(req: Request) { 
    const { searchParams } = new URL(req.url); 
    const recordId = searchParams.get("recordId"); 
    const user = await currentUser(); 
    
    try { 
        if (recordId) { 
            const result = await db.select().from(HistoryTable).where(eq(HistoryTable.recordId, recordId)).orderBy(desc(HistoryTable.id)); 
            return NextResponse.json(result) 
        } else { 
            const result = await db.select().from(HistoryTable).where(eq(HistoryTable.userEmail, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(HistoryTable.id)); 
            return NextResponse.json(result) } 
    } catch (e) { 
        console.error("GET /api/history error:", e); 
        return NextResponse.json({ error: e }, { status: 500 }); 
    } 
}