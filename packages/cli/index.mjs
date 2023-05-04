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
        const componentName = argv.name

        // 获取模板文件内容
        const template = `
import React from 'react';

const ${componentName} = () => {
  return (
    <div>
      <h1>${componentName} Component</h1>
    </div>
  );
};

export default ${componentName};
`

        // 创建文件夹
        await fs.outputFile(
          `./${componentName}/${componentName}.tsx`,
          template.trim()
        )

        console.log(
          chalk.bgBlue(
            `Component ${componentName} created successfully in ${componentName}/${componentName}.tsx`
          )
        )
      } catch (err) {
        console.error(
          chalk.red('Error creating component:', err)
        )
      }
    }
  )
  .parse()
