# Kylin-UI Component

[![CI](https://github.com/kongmingLatern/kylin-ui/actions/workflows/main.yml/badge.svg)](https://github.com/kongmingLatern/kylin-ui/actions/workflows/main.yml)

## What's this?

> A high-level UI React components library for Kylin-UI.

## Directory Structure

```bash
├── README.md               # README
├── commitlint.config.cjs   # Commlint config
├── docs                    # Vitepress address
├── _template               # hygen template
├── .husky                  # husky hook
├── index.html
├── package.json
├── packages                # Monorepo
    ├── cli                 # Command line tool
    ├── components          # All components
    ├── hooks               # Hooks
    ├── icon                # Icon packages
    ├── preset              # Kylin.config.js preset config
    ├── shared              # Utils / helpers
    ├── stories             # Storybook Folder
    ├── styled-system       # styled-system theme define
    └── theme               # Style Folder
    └── unocss              # Unocss package 
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── public
├── scripts                 # Build cli helper
├── shims.d.ts              # Declaration File
├── src
├── tsconfig.json
├── tsconfig.node.json
├── uno.config.ts
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── vite.config.ts
└── vitest.config.ts
```

## Current progress

### Component

- [x] Avatar (`styled-component`)
- [x] Badge (`styled-component`)
- [x] Button(`styled-component`)
  - [x] ButtonGroup(`styled-component`)
- [x] Divider(`styled-component`)
- [x] Card (`styled-component`)
- [x] Grid
  - [x] Row(`styled-component`)
  - [x] Col(`styled-component`)
- [x] Layout(`No need`)
  - [x] Header(`No need`)
  - [x] Content(`No need`)
  - [x] Footer(`No need`)
- [x] List(`styled-component`)
  - [x] Item(`styled-component`)
- [x] Image(`styled-component`)
- [x] Input(`styled-component`)
  - [x] Password(`styled-component`)
- [x] InputNumber(`styled-component`)
- [x] Message
- [x] Space(`styled-component`)
- [x] Spin(`styled-component`)
- [x] Tag(`styled-component`)
- [x] ThemeProvider(`No need`)
- [x] Typography(`styled-component`)
  - [x] Title(`styled-component`)
  - [x] Text(`styled-component`)
  - [x] Paragraph(`styled-component`)

### Packages

- [x] Cli
- [x] Component
- [x] Hooks
- [x] Icon
- [x] Preset
- [x] Shared
- [x] Theme

### Hooks

### Utils

- [x] Rollup Options

## How to use?

```bash
  npm install / yarn / pnpm install

  npm run dev / yarn dev / pnpm run dev
```

## Install

TODO

## Design Principles

1. Developer's experience（Most Import）

2. Render Performance

3. flexibility

4. Extensibility

5. The learning cost

## Contribution Process

If you would like to contribute to MyReactComponentLibrary, please follow these steps:

1. Fork the project on GitHub to your account
2. Clone your forked repository to your local machine
3. Create a new branch, such as feature/new-component or fix/issue-123
4. Make changes on the new branch
5. Ensure the code follows the Coding Guidelines
6. Run tests and ensure all tests pass
7. Write commit messages following the Commit Guidelines
8. Push the changes to your forked repository
9. Create a pull request on GitHub to merge your branch into the main branch of the main repository

We will review your pull request as soon as possible. If there are any issues or changes needed, we will communicate with you in the comments. Once your contribution is accepted and merged, you will become a contributor to the project.

## How to contribution a new component

1. Fork the project on GitHub to your account
2. Clone your forked repository to your local machine
3. You can use `hygen` to create a new component template, If you don't have `hygen`, you can install it globally with `npm install -g hygen`
4. Then you can use `hygen component new {Your Component Name}` to create a new component template
5. Make changes on the new branch
6. Ensure the code follows the Coding Guidelines
7. Run tests and ensure all tests pass
8. Write commit messages following the Commit Guidelines
9. Push the changes to your forked repository
10. Create a pull request on GitHub to merge your branch into the main branch of the main repository

## Commit Guidelines

Please follow these commit message guidelines:

1. Use the present tense ("Add feature" not "Added feature")
2. Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
3. Limit the first line to 60 characters or less
4. Reference issues and pull requests liberally
5. Consider starting the commit message with an applicable emoji

## Contact Us

If you have any questions, suggestions, or need help, feel free to reach out to us:

Email 邮箱: <1577310596@qq.com>

Thank you for your contribution to Kylin-UI!
