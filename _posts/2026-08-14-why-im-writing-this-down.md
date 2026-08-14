---
title: "Why I'm writing this down"
date: 2026-08-14
tags: [personal]
excerpt: "Four years of building systems that mostly worked, and almost none of it written down."
---

I've been writing backend systems for four years now and I have almost nothing
to show for the thinking behind them. The code is in a private monorepo. The
design docs are in Confluence, behind SSO, written for an audience of six
people who already had the context. The interesting part — the argument we had
about whether to make the counter approximate — lives in a Slack thread that
search will never surface again.

So: this site.

The rule I'm giving myself is that a post has to contain at least one thing I
got wrong. Not as performance of humility — because the posts I actually reread
are the ones where someone says "we shipped this and then discovered X," and X
is the thing no amount of design review would have found.

Three things I want to write about:

**Systems under load.** Most of what I do is make a service survive a number
that used to break it. 500K records to 5M. 15K TPS at sub-50ms. 100K
impressions a second. The number is never the interesting part. The interesting
part is which assumption stopped being true on the way there.

**Working with AI tools honestly.** I set up my team's workflow around Cursor,
Claude, and MCP servers, and I have opinions that don't fit in either the
"it changes everything" or "it's autocomplete" camp. Mostly about where the
review burden moved to.

**Side projects that met real users.** [SK Chess](https://accessiblechess.in)
taught me more about interface design in six months than any amount of backend
work did, largely because the people using it could not see the interface at
all.

That's the plan. Posts will be irregular. They'll be here.
