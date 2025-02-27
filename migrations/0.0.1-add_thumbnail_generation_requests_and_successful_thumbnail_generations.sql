CREATE TABLE "thumbnail_generation_requests" (request_id UUID DEFAULT gen_random_uuid() PRIMARY KEY);
CREATE TABLE "successful_thumbnail_generations" (
  equest_id UUID
  CONSTRAINT "fk_requests" FOREIGN KEY ("request_id") REFERENCES "thumbnail_generation_requests" ("request_id")
  );