<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# iCloud "* 2" duplicate files

This repo lives on iCloud Drive. iCloud sync periodically creates duplicate files with " 2" appended:

- **Inside `.git/`** (`refs/heads/main 2`, `refs/remotes/origin/main 2`, `index 2`) → corrupts git: `fetch`/`push` fail with `fatal: bad object refs/heads/main 2`. Fix: `find .git -type f -name "* 2*" -delete`, then re-run.
- **In `public/images/`** → never `git add .` / `git add -A`; stage by name so duplicates don't get committed.

Audit before any commit: `find . -path ./node_modules -prune -o -type f -name "* 2*" -print`.

# Dev server is slow on iCloud

`next dev` startup takes ~30s. Wait for the "Ready in" line — don't assume it's broken.

# Vercel auto-deploys from `git push`

This project's Vercel integration deploys on every push to `main`. Don't run `npx vercel` separately — push and let the integration build. Live URL: https://21-aura-aquatics.vercel.app/
