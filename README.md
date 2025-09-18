# Design Tokens with React & Material UI

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Material UI Theme Integration](#material-ui-theme-integration)
- [Workflow](#workflow)
- [References](#references)
- [TODO](#todo)

## Introduction

Design tokens are a way to store and manage visual design attributes (colors, typography, spacing, etc.) in a platform-agnostic and reusable format. They enable consistency and scalability in design systems by centralizing style values, making it easy to update and propagate changes across multiple platforms and products.

In this project, [style-dictionary](https://styledictionary.com/getting-started/installation/) is used to generate the design tokens. Design tokens are defined in a JSONC format in `src/theme/tokens.jsonc` and transformed into TypeScript and CSS files for use in your application. This file is meant to be be shared among developers and UX designers as the single source of truth.

## Getting Started

1. Install project dependencies with `npm i`.

2. Build design tokens with the following command:

```sh
npm run build:tokens
```

This command executes:

```sh
ts-node src/theme/build-tokens.ts
```

This command will generate the following files:

- `tokens.ts`
- `tokens.d.ts`
- `tokens.css`

The outputs are controlled and determined in `style-dictionary.config.json`. Modify this accordingly for your own project requirements.

3. Run the sample React app with:

```sh
npm run dev
```

## Material UI Theme Integration

Material UI components are customized using the generated design tokens via the `ThemeOptions` object in `src/theme/themeOptions.ts`. This integration ensures that your UI components consistently use the design system values defined by the designers.

Using `ThemeOptions` allows us to control the styles of your components globally, instead of having developers going into each component to manually override the styles of the component. This approach allows you to update your design tokens and have those changes automatically reflected throughout your Material UI components, ensuring a consistent and maintainable design system.

## Workflow

1. During development, run your application locally with `npm run dev`.
2. Modify the styles of your components in `tokens.jsonc` or your `ThemeOptions` to see if it looks suitable for your application.
3. After modifying `tokens.jsonc`, open a new CLI instance and run `npm run build:tokens`.
4. Auto-hot reloading should happen and update your styles in your application immediately.

## References

- [Material UI Theming](https://mui.com/material-ui/customization/theming/)
- [Style Dictionary](https://styledictionary.com/getting-started/installation/)
- [Awesome Design Tokens](https://github.com/sturobson/Awesome-Design-Tokens)

## TODO

- [x] How to handle different custom variants of `Button`
  - Default variants: contained, outlined (just use variant prop in button)
  - Custom variants: back, ghost, danger
- [x] Evaluate what `CustomThemeProvider` has that the default `ThemeProvider` does not have
- [ ] Export design tokens as a package to use across different projects/codebases
