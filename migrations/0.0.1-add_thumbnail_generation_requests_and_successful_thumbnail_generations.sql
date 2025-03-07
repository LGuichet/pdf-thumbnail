CREATE TABLE "thumbnail_generation_requests" (id UUID DEFAULT gen_random_uuid() PRIMARY KEY);
CREATE TABLE "completed_generation_jobs" (
  id UUID,
  CONSTRAINT "fk_requests" FOREIGN KEY ("id") REFERENCES "thumbnail_generation_requests" ("id")
  );