import { integer, pgTable, varchar, json } from "drizzle-orm/pg-core";

// Users table
export const usersTable = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
});

// History table
export const HistoryTable = pgTable("historyTable", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  recordId: varchar("record_id", { length: 255 }).notNull(),
  content: json("content"), // fixed json import
  userEmail: varchar("user_email", { length: 255 }).references(() => usersTable.email),
  createdAt: varchar("created_at", { length: 255 }),
  aiAgentType: varchar("ai_agent_type", { length: 255 }),
  metaData: varchar("metaData", { length: 2048 }) 
});
