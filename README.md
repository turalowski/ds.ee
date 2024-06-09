# Brief information

This repository is created to show real how to implement design system and use monorepository to create multiple packages. Following packages are exist in the repo:

- `@ds.ee/scss` -> All system variables and foundation styles
- `@ds.ee/react` -> React components developed by using `@ds.ee/scss` package
- `@ds.ee/playgrounds/react` -> Package to play and test React components.

# Monorepositories

`yarn` and `lerna` used to manage packages across the repository.

Main role of `yarn` is to manage workspaces, which is helpful to store `node_modules` folder in the root directory. It's the main benefit of workspaces of yarn, it help to share `node_modules` at the top level and only relevant scripts are symlinked into the package project itself.

# @ds.ee/scss

This package is used to store system variables and style elements. We use 2 level of abstraction here:

```
_variables.scss -> _root.scss -> _colors.scss & _typography.scss
```

If it's required to customzie theming, users can override `_root.scss` variables and define their owns. 

## System variables

System variables is used to define simple variables, such as used green color in reopo, used font in repo etc. 

These variables are defined in `@ds.ee/packages/scss/src/foundation/_variables.scss`

Example:

```
$green: #5ece7b;
$green-light: #9ee2b0;
```

In future, if you decide to use another shade of green color, updating `$green` variable will be enough.

Following system variables are exist:

- Colors
- Typography
- Breakpoints
- Spacing
- Font Sizes

These variables are used to define root variables, and root variables also used to define design system variables. If user need to override styles, he just need to import root css and override its values.

## Compile SCSS to CSS

`@ds.ee/packages/scss/src/scripts/build.js` script is used to compile all scss files to css. All css files are stored in `/lib/*` folder.

This script is used by `build` and `dev` scripts.

# @ds.ee/foundation

Foundation package is used to create dynamic objects for font size and spacing. This helps to know which values are exist without checking `@ds.ee/scss` and using auto completion feature.

# React package

React package is used to store main components. It's using following naming convention:

- **Atoms**: The most basic building blocks, such as buttons, inputs, labels, etc.
- **Molecules**: Combinations of atoms, like a form group with a label and an input.
- **Organisms**: Groups of molecules forming a distinct section of an interface, like a header or a sidebar.
- **Templates**: Page-level components that place organisms into a layout.
- **Pages**: Specific instances of templates, filling in the template with real content.

## Compile

`rollup` package is used bundle the React application. The destination folder is `/lib`.


## Unit Testing

`jest` and `@testing-library/react` packages are used to write unit tests for React components.

## Storybook

Storybook is a tool used to visually test React components. The following addons are integrated with Storybook to enhance its functionality:

- @storybook/addon-webpack5-compiler-swc: Integrates SWC compiler with Webpack 5 for faster builds and optimizations.
- @storybook/addon-onboarding: Provides a guided onboarding experience for new users of Storybook.
- @storybook/addon-links: Enables navigation between stories for better component documentation.
- @storybook/addon-essentials: A collection of essential addons for Storybook, including actions, backgrounds, controls, docs, viewport, and toolbars.
- @chromatic-com/storybook: Connects Storybook with Chromatic for automated visual testing and UI review.
- @storybook/addon-interactions: Facilitates testing and simulating user interactions within stories.
- @storybook/addon-controls: Allows for dynamic editing of component props directly in the Storybook UI.
- @storybook/addon-a11y: Helps ensure accessibility compliance by providing tools to test and improve the accessibility of components.

## Commits and Changelog

`commitizen` and `cz-conventional-changelog` are used to generate well defined configs and keep record of all commits.

It's integrated with precommit hook, to avoid using of `git commit`

To create a commit, `yarn run commit` command should be used.

## Publish to npm

`lerna publish` command is used to publish the repository to npm.

## Github actions / CI / CD

Github actions is used to check build and test of all packages. In addition, it's used for chromatic, to publish visual testing for Storybook. 

