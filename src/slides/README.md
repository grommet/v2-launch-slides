# slides


## Add

Add slides by copying one of the existing slide files and editing it. You must also update `index.tsx` to reference the slides.

## Edit

There are two parts to a Slide:

### Properties of the `<Slide>` component

| property | value |
|----------|-------|
| align | [Box align](https://v2.grommet.io/box#align) |
| animation | [Box animation](https://v2.grommet.io/box#animation) |
| background | [Box background](https://v2.grommet.io/box#background) |
| components | [Markdown components](https://v2.grommet.io/markdown#components) |
| justify | [Box justify](https://v2.grommet.io/box#justify) |

### Content of the `<Slide>` component

The content of the Slide should be in [Markdown syntax](https://www.markdownguide.org/basic-syntax).

### Images

Any images should be added to the `public` folder at the root of this repository. They can then be referenced in the Markdown content or Slide background.
