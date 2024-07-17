import { db } from '@/libs/db';
import chalk from 'chalk';

export const delay = async (ms: number) => {
  await new Promise((res) => setTimeout(res, ms));
};

export const setQueryLog = (
  roll: string,
  caller: string,
  result?: object | number | string | null,
) => {
  if (process.env.NODE_ENV !== 'production') {
    db.$on('query', (e) => {
      // SQL 키워드 자동 개행 및 색상 부여
      const query = e.query
        .toString()
        .replace(
          /(SELECT|UPDATE|DELETE|FROM|JOIN ON|WHERE|GROUP BY|HAVING|ORDER BY|LIMIT|OFFSET)\b/g,
          '\n\x1b[35m$1\x1b[0m',
        )
        .replace(/(DESC|ASC)\b/g, '\x1b[35m$1\x1b[0m')
        .replace(/,/g, '\n')
        .replaceAll('`', '');

      console.log(chalk.black(chalk.bgCyan(` ❖ caller: ${caller} `)));
      console.log(chalk.black(chalk.bgCyan(` ❖ roll: ${roll} `)));
      console.log(`${chalk.cyan('Query: ')}${query}`);
      console.log(`${chalk.blue('Params: ')}${e.params}`);
      console.log(
        `${chalk.yellow('Duration: ')}${e.duration}ms ${e.duration >= 2 ? chalk.red('Too Lazy') : chalk.green('Good')}`,
      );
      result && console.log(`${chalk.cyan('Result:')}`);
      result && console.log(result);
      console.log(chalk.black(chalk.bgCyan(` ❖ DONE! ❖ `)));
    });
  }
};
