CREATE TABLE "thumbnail_generation_requests" (id UUID DEFAULT gen_random_uuid() PRIMARY KEY);
CREATE TABLE "successful_thumbnail_generations" (
  id UUID,
  CONSTRAINT "fk_requests" FOREIGN KEY ("id") REFERENCES "thumbnail_generation_requests" ("id")
  );