[![make.fun](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/tunnelmoon/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/tunnelmoon/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

# The Dog Ate My Homework: Funniest Excuse

make.fun bounty entry. A program that writes one line, under 200 characters, of the excuse a dog gives after being caught eating the homework.

The entry line:

> I ate your homework so the teacher can never grade it. You're welcome.

## How it works

`main.ts` (Node 22, standard library only) embeds the line, validates it against the bounty gate (1 to 200 characters, a single line, not only whitespace), writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, and verifies the write with a round-trip read-back check.

## Run it

```sh
node main.ts
```

The entry lands in `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set).
