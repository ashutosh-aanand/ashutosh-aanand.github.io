---
layout: page
title: About
permalink: /about/
---

I'm a backend engineer at Paytm, currently a Senior Software Engineer on
Connectplus — the customer engagement and communication platform.

I joined as an intern in January 2022, went full-time that June, and moved to
Senior Software Engineer in June 2024. Before that I studied Electrical and
Electronics Engineering at NIT Jamshedpur.

## Work

Most of what I do is messaging infrastructure. I led the Rich Communication
Services integration into Connectplus — template management, campaign
orchestration, delivery, callbacks, reporting — which runs about 10 million
messages a day.

Some other things I've worked on:

- Rewriting campaign audience uploads as an event-driven pipeline on S3
  pre-signed URLs and Lambda, which moved the ceiling from 500K to 5M records
  per upload.
- An impression capping service that regulates banner exposure across business
  verticals, at over 100K impressions per second.
- A tool that rewrites WhatsApp templates to avoid Utility-to-Marketing
  recategorization, cutting it by 70–80%.
- Optimizing the homepage serving layer to hold 15K+ TPS at sub-50ms during
  peak, and adding Resilience4j circuit breakers, timeouts and alerting across
  the critical upstream dependencies.
- Setting up the team's development workflow around Cursor, Claude, MCP tools,
  Atlassian, Jenkins and ArgoCD.

## Tools

Java and Spring Boot day to day. Kafka, Redis, Cassandra and MySQL for the
stateful parts. Grafana and Prometheus for finding out what actually happened.

## Side of the desk

I built [SK Chess](https://accessiblechess.in), a chess application for
visually impaired players — it reads PGN books aloud, gives audio feedback on
the position, runs Stockfish analysis, and supports training mode, manual move
input and game recording. Players in more than ten countries use it, and
ChessBase India wrote about it.

## Contact

[ashutosh.aanand@gmail.com](mailto:ashutosh.aanand@gmail.com) —
also [GitHub](https://github.com/ashutosh-aanand) and
[LinkedIn](https://www.linkedin.com/in/ashutosh-anand-1a1743156/).
