---
title: "Code Isn't Business Until the Receipt Arrives"
date: 2026-02-14
excerpt: "72 Hours of Monetizing an AI Service - The journey from localhost greenhouse to the wilderness of production where real money changes hands"
tags: ["AI", "Service Monetization", "Payment Systems", "Production", "Polar"]
published: true
---

## 72 Hours of Monetizing an AI Service

At 3 AM, the code on my screen was a tangled mess, and my mind was blank.

Claude, my trusted AI coding partner, started losing track of the long context. It was a bug-breeding "ant hell" - the more I fixed, the more bugs multiplied. Variable names changed randomly, and logic that worked moments ago broke in the next instant.

That's when I realized. This wasn't a coding problem.

It was the process of leaving the greenhouse called localhost and entering the wilderness called production, where real money changes hands. And for a solo developer, the wilderness is always harsh.

## 1. AI Hallucinations and the Turning Point

It started smoothly. Collaborating with Claude was like magic. When I explained my intentions, code flowed effortlessly.

But as the project grew, strange things started happening. Fixed logic reverted, non-existent functions were called, and "what worked just now" broke the next moment. Classic AI hallucination symptoms.

At 3 AM, I stared blankly at the screen. I couldn't ask it to write more code.

**"Before asking for more code, let's redesign the architecture."**

I switched partners to ChatGPT (Meta-chulbuji) and started over, defining the deployment environment and environment variables (Secrets) before writing code.

Through this process, I learned a painful lesson: Solo developers often fail not due to lack of skill, but due to **'failure to control complexity'**.

## 2. The Wall of Payment Integration

Simply 'building' an AI in-depth report and 'selling' it were completely different problems. When the payment system wobbles, everything collapses.

I chose Polar, which is developer-friendly. But integration was more challenging than expected.

### 401 Unauthorized: The Door Wouldn't Open

The first obstacle was Polar API calls. Constant 401 errors.

The more you think "I definitely added the key," the more dangerous it is. In my experience, 90% of these cases mean the key is invalid. It's not the code.

The conclusion was simple. The Polar API token had expired, and reissuing it immediately resolved the issue.

**Production's First Rule: Keys aren't right, they must be validated.**

### 422 Unprocessable Entity: The Product Was 'Empty'

Right after breaking through 401, I got 422. On the surface it looked like a "product ID problem," but following the logs revealed the real cause.

In the request payload: `products: [null]`

In other words, `POLAR_PRODUCT_ID` wasn't being injected at runtime.

It's not "I copied it from the dashboard, why?" The value wasn't in the Production environment variables, or it was only in a different environment (Preview).

I verified the exact Product UUID from Polar's product page URL and re-registered it (delete and re-add) in Cloudflare Pages' Production environment variables. Only then did the 422 disappear.

**Environment variables aren't 'set', they must be confirmed at runtime.**

### TypeScript Tripped Me Up

The final hurdle was deployment. It ran fine locally but broke on Cloudflare Pages build.

The cause was surprisingly simple. If you don't specify the env type in Pages Functions, the default type only captures ASSETS, so accesses like `env.DB` or `env.POLAR_PRODUCT_ID` all break the build with TypeScript errors.

The solution was clear. I specified the `PagesFunction<Env>` type for the debug-env endpoint to pass the build.

And I confirmed 'injection success' by verifying `hasPolarProduct=true, len=36` at runtime.

The moment the green "Success" appeared, I viscerally understood: In production, a 'green light' isn't emotion, it's evidence.

## 3. $0 Payment, But Just Like the Real Thing

Even with successful deployment, testing only on my PC was meaningless.

Cache, login state, developer habits... everything could distort the results. So I called in the most objective tester.

**A family member's phone.**

I turned off WiFi and connected via LTE. Then I created a 100% discount coupon for internal testing.

What mattered wasn't the '$0'. It was the **process**.

Does it navigate to the payment page? Does the discount apply? Is the card verification flow normal? After payment completion, does it generate the report and deliver the PDF?

During those brief seconds, the server worked busily. Creating orders, confirming payments, generating reports, and delivering PDFs.

And on the screen appeared an AI-analyzed in-depth report (PDF).

**It was the moment proving not "it works" but "users can use it".**

## 4. The $0 Receipt, The Beginning of Business

A few seconds later, a receipt email arrived in my inbox.

(Sender: chulbuji-labs via Polar)

Amount: $0.00.

But the meaning wasn't zero.

**This receipt was proof of a 'completed transaction' - my code received a user's order, passed through the discount/payment verification process, and delivered the promised digital product (PDF).**

From this moment, I was no longer just "someone who builds things."

I became **someone who operates a running system**.

## Closing: Not Perfect Code, But Closed Loops Make Businesses

The conclusion from these 72 hours is one line:

**"Code creates features, receipts prove business."**

And three practical lessons learned from this process:

• 70% of production problems are not code, but configuration (environment variables/domains/permissions).
• "It runs" must be proven with logs/responses/injection verification, not feelings.
• Services are completed not with developer testing, but with general user (family/friends) testing.

## Next Steps

What to do now:

• Clean up debug logs/endpoints for operations
• Fix the chulbuji.com (blog) → insight.chulbuji.com (service) connection from an SEO perspective
• Publish this launch record and prepare to welcome "the first 10 users"

Finally, if reading this made you feel **"I want to objectively organize my situation too,"** you can check it out here:

**https://insight.chulbuji.com/form**

---

**Note:** This report is not a medical/legal diagnosis, but a tool that structures user input and organizes it from an execution perspective. In crisis situations, it's safer to prioritize professional institutions/experts for help.
