#!/usr/bin/env node

import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import chalk from 'chalk'
import * as path from 'path'
import inquirer from 'inquirer'
import fs from 'fs-extra'

// 定义 CLI 命令
yargs(hideBin(process.argv))
  .command(
    'create component [name]',
    'Create a new component',
    yargs => {
      yargs.positional('name', {
        describe: 'Component name',
        type: 'string',
      })
    },
    async argv => {
      try {
        const questions = initQuestion(argv)

        const answers = await inquirer.prompt(questions)

        const { componentName, includeStyles: cssType } =
          answers

        // 判断文件夹是否重名
        if (isDirExisted(componentName)) {
          throw new Error(
            `Component ${componentName} already exists.`
          )
        }

        const res = await Promise.all([
          createComponentFile(componentName),
          createComponentTestFile(componentName),
          createComponentStyle(componentName, cssType),
        ])

        if (res.filter(Boolean).length === 3) {
          console.log(chalk.green(`Successfully created!`))
        } else {
          console.log(chalk.red(`Failed to create!`))
        }
      } catch (err) {
        console.error(
          chalk.red('Error creating component:', err)
        )
      }
    }
  )
  .parse()

function getComponentTemplate(componentName) {
  return `
    const ${componentName} = () => {
      return (
        <div>
          <h1>${componentName} Component</h1>
        </div>
      );
    };

    export default ${componentName};
`
}

function initQuestion(argv) {
  return [
    {
      type: 'input',
      name: 'componentName',
      message: 'What is the name of the component?',
      default: argv.name || 'MyComponent',
    },
    {
      type: 'list',
      name: 'includeStyles',
      message: 'What css type do you want to use?',
      choices: [
        { name: 'CSS', value: 'css' },
        { name: 'SCSS', value: 'scss' },
        { name: 'LESS', value: 'less' },
        { name: 'None', value: 'none' },
      ],
    },
  ]
}

function getCommonPath(componentName) {
  return `${resolvePath()}${componentName}/${componentName}`
}

async function createComponentFile(componentName) {
  const template = getComponentTemplate(componentName)
  await fs.outputFile(
    `${getCommonPath(componentName)}.tsx`,
    template.trim()
  )
  console.log(
    chalk.green(
      `Component ${componentName} created successfully in ${chalk.bgYellow(
        `${resolvePath()}${componentName}/${componentName}.tsx`
      )} `
    )
  )

  return true
}

async function createComponentTestFile(componentName) {
  const testTemplate = `
import { render, screen } from '@testing-library/react';
import ${componentName} from '../${componentName}';
test('renders ${componentName} component', () => {
  render(<${componentName} />);
  const linkElement = screen.getByText(/${componentName} Component/i);
expect(linkElement.firstChild).toMatchInlineSnapshot('${componentName} Component')
});
`
  await fs.outputFile(
    `${resolvePath()}${componentName}/__tests__/${componentName}.spec.tsx`,
    testTemplate.trim()
  )
  console.log(
    chalk.green(
      `Test for ${componentName}/__tests__/${componentName} created successfully in ${chalk.bgYellow(
        `${resolvePath()}${componentName}/__tests__/${componentName}.spec.tsx`
      )}`
    )
  )

  return true
}

async function createComponentStyle(
  componentName,
  cssType
) {
  if (isEffective(cssType)) {
    const cssTemplate = `/* Add your styles here */\n`
    await fs.outputFile(
      `${getCommonPath(componentName)}.${cssType}`,
      cssTemplate
    )
    console.log(
      chalk.green(
        `Styles for ${componentName} created successfully in ${chalk.bgYellow(
          `${resolvePath()}${componentName}/${componentName}.${cssType}`
        )}`
      )
    )
    return true
  } else {
    return false
  }
}

function isDirExisted(componentName) {
  return fs.existsSync(`${resolvePath()}./${componentName}`)
}

function isEffective(cssType) {
  return cssType !== 'none'
}

function resolvePath() {
  return (
    path.resolve(process.cwd()) + '/packages/components/'
  )
}
