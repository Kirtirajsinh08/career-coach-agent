CREATE TABLE "historyTable" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "historyTable_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"record_id" varchar(255) NOT NULL,
	"content" json,
	"user_email" varchar(255),
	"created_at" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "historyTable" ADD CONSTRAINT "historyTable_user_email_users_email_fk" FOREIGN KEY ("user_email") REFERENCES "public"."users"("email") ON DELETE no action ON UPDATE no action;