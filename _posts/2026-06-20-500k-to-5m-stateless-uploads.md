---
title: "From 500K to 5M: making bulk uploads stateless"
date: 2026-06-20
tags: [technical]
excerpt: "The upload path was stateful, and state is what breaks first when the file gets bigger."
---

> **Draft.** The skeleton is real; the numbered details still need filling in
> from the design doc. Delete this note before publishing.

Campaign audience uploads at Connectplus used to top out somewhere around
**500K records**. Not because of a hard limit anyone wrote down — because the
upload path held the file, and the parse, and the validation, and the write, all
inside one request-scoped lifetime on one box. Every failure mode was the same
failure mode wearing a different hat.

Re-architecting it as a stateless, event-driven pipeline on S3 pre-signed URLs
and Lambda took it to **5M records per upload**.

## The shape of the old problem

TODO — describe the original synchronous path:

- where the file was buffered
- what the timeout actually was
- which component ran out of memory first

## Why pre-signed URLs

The first thing to notice is that the application server had no business
touching the bytes at all. It was a very expensive proxy between the client and
S3. A pre-signed URL removes it from the data path entirely: the client uploads
straight to S3, and the backend only ever deals with an object key.

That single change does three things at once — it removes the memory ceiling,
it removes the request timeout, and it makes retries cheap because the object is
already durable before any processing starts.

## Fan-out and the idempotency question

TODO — the part worth writing carefully:

- chunking strategy and how chunk boundaries were chosen
- what guarantees Lambda gives you on retry (at-least-once) and what that means
  for a pipeline that writes to a campaign store
- the idempotency key design
- what happens to a chunk that fails permanently — DLQ, partial-success
  reporting, how the user finds out

## What I'd do differently

TODO — one honest thing that went wrong.

## Numbers

| | Before | After |
| --- | --- | --- |
| Max records per upload | 500K | 5M |
| Bytes through app server | all of them | none |
| Failure blast radius | whole upload | one chunk |
