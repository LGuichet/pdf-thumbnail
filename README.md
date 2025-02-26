# Backend Coding Challenge

## Problem Statement

Construct a micro-service that, when given an link to a pdf document:

1. stores the document in local storage and
2. generates a thumbnail for the document

## Technologies to use

- Typescript
- Node

## Requirements

### Mandatory

- Expose an endpoint where an API consumer can POST a PDF.
  - The PDF should be specified as a URL in the message body, not a file upload
  - The endpoint should respond immediately after receiving the link, without waiting for the PDF to be processed
- Expose an endpoint which returns a list of PDFs and their associated thumbnails (both as URLs).

### Optional stretch goals

_These are optional, do as many as you can/want_

- Detect duplicates
- Push a webhook to notify the API client of the successful processing.

## Submission details

- POST  <base_url>/pdfs
  - minimal validation : type = pdf  -> 422 if invalid
  - bdd : uuid in table "thumbnail_generation_requests"
  - starts async processing then returns 201 {id: uuid}
- Processing
  - save pdf in file system with naming "id.pdf".
  - first page extraction, conversion to png scaled to 256x256px
  - save png in file system with naming "id.png"
  - insert a end of processing event in the bdd table named "successful_thumbnail_jobs"
- GET <base_url>/pdfs-thumbnails
  - sql SELECT * from successfull_thumbnail_jobs
  - response [{id: uuid, pdf_url: <base_url>/pdfs/:id, thumbnail_url: <base_url>/pdfs/:id/thumbnail}]
- GET <base_url>/pdfs/:id
- GET <base_url>/pdfs/:id/thumbnail

## Evaluation criteria

You should see this challenge as a way to showcase your software engineering skills in a professional environment.
