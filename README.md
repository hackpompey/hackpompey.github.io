# hackpompey.co.uk

This is the new (as of 2019) website for Hack Pompey. A Portsmouth based social hack event.

Requires Node.js >=14.15.0

# Setup

## Development

This site is built using Gatsby.js and uses NPM for dependency management.

Start by installing [Node/NPM](https://nodejs.org/) if you don't already have it.

To install the project dependencies navigate to the project directory (where `package.json` is located) and run:

```
npm install
```

To build and deploy the site locally, run:

```
npm run develop
```

Once Gatsby is ready, you can view the site at http://localhost:8000/

You can also interact with the GraphQL via http://localhost:8000/___graphql

Gatsby will watch for any file changes and automatically rebuild as needed.
If you do not see your changes take effect, check the CLI for build errors.

Changes to the Gatsby config files may require you to stop and restart `npm run develop`

## Deployment

To build an optimised bundle, run:

```
npm run build
```

You can test this locally by running:

```
npm run serve
```

You can then view the site at http://localhost:9000/

When happy with the changes, deploy publicly by running:

```
npm run deploy
```

# Site Structure

## Pages

Any `.js` or `.md` file in `src/pages/` will become a page of the same name.

## Events

Any `.md` file in `src/pages/events/` will become an event page and will be listed on the past events page.

### Adding an event

- Create an new file in `src/pages/events/` named `myevent.md`, where "myevent" is a unique event name for internal reference.

- Add markdown metadata to the file as indicated [below](#event-metadata), for generating the event banner. If this is the new current event, make sure to remove the `Current Event` tag from the event file that currently holds it (and probably give that event the `Past Event` tag) and then add the `Current Event` tag to `myevent.md`.

- Add markdown content to the file, to display on the event page.

- Add the event's logo to `src/images/events/banners/` and name it either `myevent.png` or `myevent.svg`. If both are present the svg will be used.

- (optional) Add a banner background image to `src/images/events/banners/` and name it `myeventBG.png`.

- (optional) Add media for the event by creating the folder `src/media/events/myevent` and adding `.md` files, as outlined in the [Media section](#media).

### Event metadata

Markdown metadata is used to generate the event banner. The properties are as follows:

| Name                      | Required | Format          | Description                                                      |
| ------------------------- | -------- | --------------- | ---------------------------------------------------------------- |
| `title`                   | yes      | any string      | The name of the event, as displayed to users.                    |
| `dateText`                | no       | any string      | The date of the event, as displayed to users.                    |
| `date`                    | yes      | UTC date string | The date of the event, used to sort events.                      |
| `location`                | no       | any string      | The location of the event, as displayed to users.                |
| `registration_link`       | no       | url             | Link for tickets/registration.                                   |
| `writeup_link`            | no       | url             | Link to some relevant remote resource.                           |
| `tags`                    | yes      | list of strings | [See below](#event-tags).                                        |
| `banner_background`       | yes      | CSS string      | Background style for the banner if there is no background image. |
| `banner_foreground_color` | no       | CSS string      | Foreground color for the banner text.                            |

### Event Tags

| Name            | Action                                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `Past Event`    | The event banner will be included on the past events page.                                                                    |
| `Current Event` | The event will be used for the splash on the homepage.<br>**Note:** Not more than one event should have this tag at any time. |

## Media

Any `.md` file in `src/media/` or any subdirectory will be rendered as a media item on the media page.

Any `.md` file in `src/media/events/` or any subdirectory will also be rendered as a media item on the corresponding event page.

Markdown metadata is used to generate the media item. The properties are as follows:

| Name         | Required | Format     | Description                                                                                                    |
| ------------ | -------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| `title`      | yes      | any string | The title of the item, as displayed to users.                                                                  |
| `thumbURl`   | no       | url        | Thumbnail image to use for the media item.                                                                     |
| `mediaURL`   | no       | url        | Full media item to display when expanded. e.g. High-res image or video.                                        |
| `mediaType`  | no       | enumerated | Can be either `IMAGE`, `VIDEO`, or `TEXT`. Used to determine how to present the `mediaURL` Defaults to `TEXT`. |
| `spanWidth`  | no       | int        | The desired number of columns to span in the media grid.                                                       |
| `spanHeight` | no       | int        | The desired number of rows to span in the media grid.                                                          |

The markdown content of the file is used as a caption, and for items without a `thumbURL` is also used as the preview.

## Splash

The splash on the homepage will display `src/images/splash.png` along with an automatically generated tagline and links.

It is **not** necessary to modify either `src/pages/index.js` or `src/components/splash.js` when adding a new event, just follow the steps outlined for [adding an event](#adding-an-event) and make sure it is tagged `Current Event`.

- If there is no event tagged `Current Event`, a generic tagline is displayed and the only link is `About Hack Pompey`.

- If the event tagged `Current Event` has a valid UTC formatted `date` then a countdown will be displayed.

- If the event tagged `Current Event` has a `ticket_link` then users will be prompted to get tickets.
