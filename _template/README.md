# The event page template

Every Hack Pompey event gets the site's front page while it is the current
one, and a folder of its own after that. This folder holds the skeleton they
all share. GitHub Pages skips folders that start with an underscore, so
normally none of it is published. For now it is, on purpose: `/_config.yml`
publishes it at `/_template/`, and `/default/` forwards there. Delete both
to hide it again.

## Starting a new event

1. **Archive the current one.** Copy the root `index.html` into the current
   event's folder, over the redirect that is there. Every path in it starts
   with `/`, so it works unchanged from there.
2. **Make the new folder,** for example `2027-something/`, and copy
   `event.css` into it.
3. **Copy `index.html` from here to the root,** and fill in the placeholders,
   which are everything in `[square brackets]`.
4. **Add the event you just archived** as the first tile under Past events.
5. When the new event is over and its own page moves into its folder, put a
   redirect to `/` back in the folder it leaves, as `2026-century-hack/` had.

## What is shared

- `/styles/global.css`: the reset, the type scale, the section layout and the
  footer. Its tokens are marked "do not remove", because every past event
  page still loads it. Override them in the event's own stylesheet rather
  than changing them here.
- The footer, the questions line and the past events block, which are the
  same on every event.

## The online event

`2026-online/` is the first event that is not in a room. Its page uses the
same skeleton with the in-person parts taken out (venue, tickets, food,
sponsors, the day's schedule) and the look of the event platform it links to.
