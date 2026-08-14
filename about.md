---
layout: page
title: About
subtitle: Backend engineer, Bangalore-adjacent, mostly thinking about throughput.
permalink: /about/
---

I'm a Senior Software Engineer at **Paytm**, where I work on Connectplus — the
customer engagement and communication platform. My work sits at the point where
product requirements meet the parts of the system that have to stay up under
load.

## What I've been building

**Rich Communication Services (RCS).** I led the end-to-end integration of RCS
into Connectplus: template management, campaign orchestration, delivery,
callback handling, and reporting. The pipeline processes 10M+ messages per day.

**Stateless base uploads.** Campaign audience uploads used to run through a
stateful service that capped out around 500K records. I re-architected it as an
event-driven pipeline on S3 pre-signed URLs and Lambda, which took it to 5M
records per upload.

**WhatsApp template optimizer.** An AI-powered tool that rewrites templates to
avoid Utility-to-Marketing recategorization — a 70–80% reduction, which maps
directly to messaging cost for enterprise clients.

**Impression capping.** A platform that regulates banner exposure across
business verticals at 100K+ impressions per second.

**Homepage serving layer.** Optimized to hold 15K+ TPS at sub-50ms latency
during peak traffic, alongside a 50% cut in third-party communication platform
costs through API and traffic optimization. I also put Resilience4j circuit
breakers, timeouts, metrics and alerting across the critical upstream
dependencies.

**AI-driven development workflow.** I set up the team's workflow around Cursor,
Claude, MCP tools, Atlassian, Jenkins and ArgoCD.

## The toolbox

| Area | Tools |
| --- | --- |
| Backend | Java, Spring Boot, REST APIs, microservices |
| Distributed systems | Kafka, Redis, Cassandra, MySQL, system design |
| AI & automation | Cursor, Claude Code, Codex, MCP servers, LLM-powered apps |
| Ops & observability | Git, Jenkins, ArgoCD, Grafana, Prometheus, Jira, Confluence |

## Before Paytm

B.Tech in Electrical and Electronics Engineering from **NIT Jamshedpur**
(2018–2022, CGPA 8.40). I joined Paytm as an intern in Jan 2022, went full-time
that June, and moved to Senior Software Engineer in June 2024.

## Elsewhere

I built [SK Chess](https://accessiblechess.in), an accessible chess application
for visually impaired players — PGN book reading, real-time audio feedback,
Stockfish analysis, training mode, manual move input and game recording. It's
used by players in 10+ countries and was featured by ChessBase India.

## Say hello

Email is the reliable channel: [ashutosh.aanand@gmail.com](mailto:ashutosh.aanand@gmail.com).
I'm also on [GitHub](https://github.com/ashutosh-aanand) and
[LinkedIn](https://www.linkedin.com/in/ashutosh-anand-1a1743156/).
