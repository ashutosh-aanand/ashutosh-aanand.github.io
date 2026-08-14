---
title: "Counting at 100K per second"
date: 2026-03-08
tags: [technical]
excerpt: "Impression capping is a counting problem, and counting is only easy when it's slow."
---

> **Draft.** Structure is right, specifics need filling in. To publish: fill in
> the TODOs, delete this note, and move the file to `_posts/` renamed with a
> date prefix — `2026-03-08-<slug>.md`.

Impression capping sounds trivial when you write the requirement down: *don't
show this banner to this user more than N times*. It stays trivial right up
until the read-modify-write has to happen **100K+ times per second**, across
verticals, with the ad-serving path waiting on the answer.

## The requirement, stated precisely

TODO — cap dimensions (user × creative × vertical × window), and the window
semantics: rolling or fixed? The answer changes the entire storage design.

## Why the obvious design doesn't work

`GET count; if (count < cap) { SET count+1 }` is two round trips and a race.
Under contention you either serialize and blow the latency budget, or you don't
and you overshoot the cap.

TODO — the numbers that ruled this out.

## Trading exactness for throughput

The useful realization is that **the cap is a business constraint, not an
invariant**. Showing a banner 11 times instead of 10 costs approximately
nothing. Adding 20ms to the ad-serving path costs a great deal.

Once you accept a bounded error, the design space opens up:

- atomic server-side increment instead of read-modify-write
- local pre-aggregation with periodic flush
- probabilistic structures where the cardinality, not the count, is what's large

TODO — which of these actually shipped, and what the observed overshoot was.

## Expiry is the hard part

TODO — the thing nobody warns you about: key expiry at this write rate. Memory
growth, eviction policy, and what happens at window rollover when a large
fraction of keys expire at once.

## What I'd do differently

TODO — one honest thing.
