---
title: "Bringing healthy activities into the games we already play"
description: "What if the healthy things you do every day could earn you rewards in the games you already play? An overview of our ICEC 2026 paper on LudoHealth, a cross-platform gamified ecosystem."
---

At [ICEC 2026 in Paris]({% post_url 2026-10-11-icec-2026-paris %}) I presented our paper *Toward Linking Health Behaviors to In-Game Rewards Through a Cross-Platform Gamified Ecosystem*, written together with Emanuele De Pellegrin of the University of Edinburgh. It's a work-in-progress paper that builds on my earlier workshop paper at the IEEE Conference on Games (CoG) and my TREO talk at ICIS. Here is what it's about.

## The problem

According to the World Health Organization, around 75% of deaths worldwide are linked to non-communicable diseases such as cardiovascular disease, diabetes and respiratory disease. Much of that is preventable through sustained healthy behaviour: being physically active, keeping your mind stimulated, and connecting with others.

Digital health solutions such as mHealth apps can support these behaviours at scale. But engagement drops once the novelty wears off, and most users leave. Gamification helps, but it usually borrows only the elements of games, like points, badges and progress bars, and not the gameplay that makes games engaging in the first place.

## Repurposing dark patterns for good

Mobile games, on the other hand, are designed to be fun and habit-forming. Tight gameplay loops, progression, rewards and streaks keep millions of players coming back to games like Candy Crush Saga and Pokémon GO. Some of that comes from dark patterns: designs that exploit traits like loss aversion, fear of missing out and social identity to keep players engaged and spending, often at the expense of their wellbeing.

Research on dark patterns has mostly focused on their harms. Using them for good, to promote real-world health behaviour, has barely been explored. That's what we want to do:

- **Monetary:** instead of paying money to get past a paywall, "pay" with healthy activities through a micro-health transaction.
- **Temporal:** instead of keeping a login streak alive, keep a healthy-habit streak alive.
- **Social:** instead of inviting friends for in-game rewards, take on health challenges as a group.

Health games already exist, from exergames like Ring Fit Adventure to location-based games like Pokémon GO and serious games designed to promote health. But there are very few examples of adding health and wellbeing activities to popular commercial games people already play. That is our idea. The catch is that it needs real-world health tracking, which most game developers neither have nor want to build. A shared platform can do that part.

## LudoHealth and GodotJump

So we built LudoHealth, a platform that captures healthy activities, whether physical, cognitive or social, through sensors and apps people already use, such as Google Fit and Fitbit, or through self-report. Activities are organised into groups, levels and challenges. For example, in our first prototype a walking challenge might ask you to reach 500, 1,000 and 5,000 steps and walk 5 km. Complete every task to earn the points, and finish every challenge to unlock the next level. The points form a persistent balance that any connected game can use.

To test this, we built a small game called GodotJump. Players sign in with their LudoHealth account and spend their points in the shop on "cheats" such as double lives. Each purchase is a single lightweight API call back to LudoHealth, so there's no engine plugin or per-game redesign needed.

<figure>
  <img src="/Img/blog/healthy-activities-in-games/how-it-works.jpg" alt="Slide showing four steps: do health tasks in LudoHealth, earn points, sign in to GodotJump, and spend points in the game shop" loading="lazy">
  <figcaption>How LudoHealth and GodotJump work together.</figcaption>
</figure>

## What players thought

We ran a user perception study with 20 participants who play digital games. They watched a concept video, could try LudoHealth and GodotJump themselves, and then rated the concept on a 7-point scale.

<figure>
  <img src="/Img/blog/healthy-activities-in-games/study-results.jpg" alt="Bar chart of construct means on a 1 to 7 scale: most between 5.3 and 5.8, with pressure and tension at 3.07" loading="lazy">
  <figcaption>Results of the user perception study (n = 20).</figcaption>
</figure>

The response was positive. Interest and enjoyment scored 5.80 out of 7, and participants' intention to use the concept 5.58. Interest went hand in hand with intention to use (ρ = .889), and 34 of the 45 pairs of measures were significantly correlated. Just as interesting, perceived pressure was low at 3.07, and it didn't correlate with any other measure. That suggests that explicit, transparent health goals may take away some of the coercion usually tied to dark patterns.

## What's next

This is still early work. The sample is small, these are self-reported perceptions of a concept, and intention is not the same as sustained use. Next, we want to:

- **Test feasibility:** run small studies to see whether people actually use it, whether there are early signs of health benefits, and whether there are unintended effects, such as feeling pressured or only being active for the rewards.
- **Talk to game developers:** through interviews and workshops with game developers and ethics experts, find out why a studio would add health-based rewards, how it fits their business models, what it takes to integrate, and which repurposed patterns are acceptable.

The bigger question is whether this is a promising way to bring health into games. I think it is, and I'm looking forward to finding out.

You can [download the slides (PDF)](/files/ICEC26_presentation.pdf) for more details. If you're a game developer or researcher interested in this, I'd love to hear from you on the [Contact page](/Contact.html).
