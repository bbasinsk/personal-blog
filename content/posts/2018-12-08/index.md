---
title: "Rant: Let's Talk About Documentation"
cover: "https://spin.atomicobject.com/wp-content/uploads/code-as-documentation.jpg"
author: "ben"
date: "2018-12-08"
category: "tech"
tags:
    - processes
    - teams
---

## Approach of Documentation

When I entered my first engineering job, I found very quickly that documentation wasn’t as available as I would’ve liked. “Our documentation is our code”, they told me before I even started. I’ve asked other developers at other companies about documentation and they share similar experiences. My experience is that our code reviews make a serious point to make sure that code is understandable. However, the level of understanding that is accomplished through ‘clean code’ can only go so far. In many cases, extra complexity is added by the relationships between various microservices, business rules, or legacy systems. It’s this complexity that I think should be more carefully documented in most cases.

## Accessibility

Another point that I want to make is that documentation is an accessibility feature. When I talk about accessibility, I am talking about lowering the barrier to entry. In the case of development, it seems like engineers set the barrier to entry around the level that they occupy. This means that it would be extremely difficult for an intern or new grad to make contributions to a codebase that is owned by a team of staff engineers (at least not within a short time frame). However, documentation serves as a tool to help beginners get started and to lower the barrier to entry. It seems like companies do not hire entry-level engineers because it can be very difficult for them to make meaningful contributions. But if documentation enables entry-level engineers to make meaningful contributions, then all of the sudden the business has a use for a lot of available and cheap talent.
So How Do We Get Better?
Figuring out when to write documentation is just as good of a question as if we should write documentation in the first place. I think the worst time to write documentation is _after_ you write the feature you are working on. If you already finish a project, it feels like a waste of time to go back and review the work that you did. I think you also miss out on a log of benefits from planning and documenting prior to starting work.

I think the best way to incorporate a documentation process is to place a request for comments step before starting a larger feature. I originally saw this idea on a blog from an Uber engineer [here](https://blog.pragmaticengineer.com/scaling-engineering-teams-via-writing-things-down-rfcs/). This request for comments captures the plan for the feature in a short, written document. The plan is then run through a few specific approvers, but also shown to anyone in the company who has comments. The benefit of this is that it initiates a process to get design feedback on large features. This feedback from other teams may become crucial if and when integration between features occurs. The second benefit is that it provides a written document outlining high-level plans for each new feature. These plans can then be used as a reference for new engineers or other teams to understand how systems work on a higher level. 
