# Brief information

This repository is created to show real how to implement design system and use monorepository to create multiple packages. Following packages are exist in the repo:

- `@ds.ee/scss` -> All system variables and foundation styles
- `@ds.ee/react` -> React components developed by using `@ds.ee/scss` package
- `@ds.ee/playgrounds/react` -> Package to play and test React components.

# @ds.ee/scss

This package is used to store system variables and style elements. We use 2 level of abstraction here:

```
System variables -> Foundation styles -> Applied to components
```

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

## Foundation styles

## Compile SCSS to CSS

# Monorepositories

## Yarn

## Lerna

# React package

## Compile

## Dynamically generating utility classes

## Defining Components

## Accessibility

## Unit Testing

## Storybook

## Publish to npm

## Github actions / CI / CD