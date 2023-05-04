#!/usr/bin/env node

import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import chalk from 'chalk'
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
        const questions = [
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
            ],
          },
        ]

        const answers = await inquirer.prompt(questions)

        const componentName = answers.componentName
        const cssType = answers.includeStyles

        const componentContent = `
const ${componentName} = () => {
  return (
    <div>
      <h1>${componentName} Component</h1>
    </div>
  );
};

export default ${componentName};
`

        // 判断文件夹是否重名
        if (isDirExisted(componentName)) {
          throw new Error(
            `Component ${componentName} already exists.`
          )
        }

        // 根据文件内容创建文件
        await createComponentFile(
          componentName,
          componentContent
        )

        await createComponentTest(componentName)

        // If need css, create css file
        if (isStyleExists(answers)) {
          const cssTemplate = ` {\n /* Add your styles here */\n}`
          await createComponentStyle(
            componentName,
            cssType,
            cssTemplate
          )
        }
      } catch (err) {
        console.error(
          chalk.red('Error creating component:', err)
        )
      }
    }
  )
  .parse()

async function createComponentTest(componentName) {
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
    `./${componentName}/__tests__/${componentName}.spec.tsx`,
    testTemplate.trim()
  )
  console.log(
    chalk.bgGreen(
      `Test for ${componentName}/__tests__/${componentName} created successfully in ${componentName}/__tests__/${componentName}.spec.tsx`
    )
  )
}

async function createComponentStyle(
  componentName,
  cssType,
  cssTemplate
) {
  await fs.outputFile(
    `./${componentName}/${componentName}.${cssType}`,
    cssTemplate
  )
  console.log(
    chalk.bgYellow(
      `Styles for ${componentName}/${componentName} created successfully in ${componentName}/index.${cssType}`
    )
  )
}

async function createComponentFile(
  componentName,
  template
) {
  await fs.outputFile(
    `./${componentName}/${componentName}.tsx`,
    template.trim()
  )
  console.log(
    chalk.bgBlue(
      `Component ${componentName} created successfully in ${componentName}/${componentName}.tsx`
    )
  )
}

function isDirExisted(componentName) {
  return fs.existsSync(`./${componentName}`)
}

function isStyleExists(answers) {
  return answers.includeStyles
}
