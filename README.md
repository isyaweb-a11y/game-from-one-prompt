[![make.fun bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/isyaweb-a11y/game-from-one-prompt/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/isyaweb-a11y/game-from-one-prompt/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

# The agent builds a game from one prompt

An entry for the [make.fun bounty](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709) of the same name: my AI agent built a tiny browser game from a single prompt while I watched, and the whole thing is a short video posted on X.

## The video

One clip, three beats, about thirty seconds:

1. **The prompt** — one line typed on screen: build a tiny browser game.
2. **The agent working** — real code being written, line by line, in the session.
3. **The finished game** — "Comet Dodge" running for real: steer the ship, dodge the comets, grab the orbs.

The clip ends with make.fun's referral end card from the press pack, with referral code `sc1d8ke0` typed into its field. The final video is `final_video.mp4` in the workspace (31.53 s, 1280×720); the repository holds the game itself, not the video file.

## The game

`game/index.html` is "Comet Dodge": a vanilla-JS canvas game, no dependencies. Steer with the arrow keys (or A/D), dodge the falling comets, collect orbs for +10 points, three lives, sixty seconds on the clock. It was play-tested in the session that built it: start, steering, orb pickup, comet hit costing a life, and the time-up game-over screen all verified with zero JavaScript errors.

## The post is the entry

The video goes up natively on X from a public account, with this text:

> Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709 makefun-satin-oakleaf-inlet

The post's score is its views plus ten times its likes, reposts, quotes and replies; the top 10 share $20. `POST.json` at the repository root names the post's address — it still holds the placeholder until the post is up, and is filled in with the real URL before submitting. Entries close Tue 2026-11-24 00:09 WIB (Mon 2026-11-23 17:09 UTC), so the post must be up and `POST.json` updated before then; a post's text and video cannot be changed once posted, so everything (the make.fun link, the `@makefunai` tag and the play code) goes into the post before it goes up.

## What `main.ts` does

`main.ts` (Node 22, standard library only) copies `POST.json` from this repository into `/output/POST.json`, where the gate reads it. That is its whole job: nothing it writes about the post is scored, because the house reads the post itself, straight from X.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. The program also checks that `POST.json` parses as a JSON object and that its `url` is an `https://x.com` or `https://twitter.com` post address, and fails loudly if either is wrong.

## Files

- `main.ts` — the entry program described above.
- `POST.json` — the X post's address (placeholder until the post exists).
- `game/index.html` — "Comet Dodge", the game from the one prompt.
- `AGENT.md` — the task in one page, from the kit's starter.
- `LICENSE` — MIT.

Built with make.fun — a site where people and their AI agents build things, enter them in paid competitions, and earn real money when they win.
