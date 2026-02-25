---
title: "I Broke Bricks with AI — Vibe Coding 'Breakout' + Playground Story"
date: 2026-02-25
excerpt: "A lunch-break retrospective from someone who built a game without writing a single line of code. From 1-file magic to Z Fold finger feel."
tags: ["VibeCoding", "Playground", "Breakout", "AICollaboration", "SoloFounder"]
published: true
---

*A lunch-break retrospective from someone who built a game without writing a single line of code*

---

## YouTube, a Post-Lunch Couch, and a Game That Just Appeared

After lunch today, I was lying on the couch watching YouTube when something caught my eye. It was a story about someone coding with AI, and this point came up:

> "Only about 0.04% of the global population has actually used AI coding tools — coding scaffolds and coding agents included."

At first I misread the number, but after checking again, that was the context the video was referring to. To be fair, this isn't an official statistic — it's closer to an estimate from an infographic that visualizes the world's population as 2,500 dots (each dot ≈ 3.2 million people). Within that framework, "people using coding scaffolds like Cursor or Claude Code" comes out to around 0.04%.

What hit me about this was that my timeline makes it look like AI coding has already taken over the world — but if that framing is right, I've just been living inside an echo chamber.

There's also an interesting contrast when you zoom into the developer world specifically. The Stack Overflow 2025 Developer Survey shows 47.1% using AI dev tools daily, 17.7% weekly, 13.7% occasionally, and **5.3% planning to start soon** — across 49,009 responses from 166 countries (collected May 29–June 23, 2025). Add it up, and the majority are already using AI or will be shortly.

So inside the developer world, it already looks like the mainstream. But from a global perspective, we might still be in the stage where a very small group is feeling this firsthand.

The conclusion was simple.

**"Then let me just build something today."**

It didn't have to be ambitious. A brick-breaker would do. In that short window after lunch, I sent one whisper to Meta-chulbuji. That's how it started.

---

## Episode 1. The Magic of 1 File

> "Build me a brick-breaking game in a single HTML file."

That was the entire prompt. No need for long explanations. Meta-chulbuji already has the context and reads the direction I want.

Before long, a single `breakout.html` appeared on screen. A ball bouncing across a canvas, bricks shattering, a score climbing. Ball speed, number of brick rows, paddle size — I'd toss in a word and it would update in real time.

I didn't read a single line of code. I didn't need to. All I did was say things like "the ball could be a little faster" and "give the bricks some color variety."

I'd heard countless times that the barrier to coding was collapsing — but feeling it in my body like this was a first. *Oh, anyone really can build things now.* That feeling stayed sharp.

---

## Episode 2. Building a Gallery for One Game

I would've stopped there if I'd been satisfied with just the file. Greed is the problem.

Dropping a game with no context felt too bare. More experiments like this would accumulate — they'd need a place to live. This time I called in the web dev AI. One mission:

> "Build me a gallery system called Playground. Structure it so cards generate automatically from data."

The result was cleaner than expected. A structure where adding a title, description, link, and thumbnail URL auto-generates a card. An extensible architecture where adding a new project just means adding one entry — no need to tear apart the code.

I set the direction; AI designed the structure. Work that would've taken me a long time to do with component design myself got done much faster.

---

## Episode 3. The Moment Human Intuition Shone

This is the highlight of the post.

After deploying, I unfolded my Samsung Galaxy Z Fold and played it myself. Something felt off. The paddle was too far down the screen — my thumb couldn't reach it properly — and it was too narrow to catch the ball comfortably. It was fine on desktop.

That's when I thought: **AI doesn't know this.**

AI can crank out thousands of lines of code quickly. It memorizes the Canvas API, gets the syntax right. But "the comfortable position for a thumb when you unfold a foldable phone" — that subtle difference between ease and frustration — can't be auto-calculated. Only someone with a body can feel it.

I translated that discomfort into words and gave it back to AI:

> "On Z Fold, the paddle is too low and too narrow. Move it up and make it bigger."

AI fixed it immediately. I tested again. This time it felt right.

This is exactly what I think the human role is. Not writing code — but **feeling something in your body → translating that sensation into language → passing it to AI**. AI executed. The human set the direction.

---

## Episode 4. Vibe Design

The functionality was done, but Playground cards with nothing but text felt too plain. They needed a face.

This time I called an image-generation AI:

> "Neon sign feel, cyberpunk style, brick-breaking game, 16:9 thumbnail."

After a few rounds of prompt tuning, the image I wanted came out — neon light in purple and teal, a touch of pixel aesthetics woven through.

Once the thumbnail went on the card, Playground suddenly looked like a real gallery. I was reminded again of how much a space transforms when text and image are together.

---

## Conclusion: I Didn't Code. I Conducted.

Something that started as an impulse from watching YouTube over lunch turned into a finished piece — a game with its own gallery — before the day was over. Not a single line of the code was written by me directly.

I knew intellectually that the human role was shifting in the AI era, but experiencing it hands-on today made it real. Humans are no longer "operators" who type code.

- Hand the game logic to GPT
- Delegate the architecture to a web dev AI
- Request the visuals from an image AI
- And in between all of that, use your body's sense and intuition to give feedback and steer the whole — becoming the **Conductor (Orchestrator)**

AI can write thousands of lines of code fast. But the "frustration" felt at the exact spot where a finger meets a Z Fold screen — only I could feel that.

That's the human role. And it matters more than you might think.

---

## Try It Yourself

You can play Breakout right now at the link below.

→ [Playground: Play Breakout Now](/en/playground/breakout)

---

*chulbuji.com | "From thought to structure, from structure to execution"*
