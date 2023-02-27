import { ListCommandOption } from '@qoopido/lerna.core';
import { listable } from '@qoopido/lerna.listable';

import { filterOptions } from '../filter-options';

/**
 * @see https://github.com/yargs/yargs/blob/master/docs/advanced.md#providing-a-command-module
 */
export default {
  command: 'list',
  aliases: ['ls', 'la', 'll'],
  describe: 'List local packages',
  builder: (yargs) => {
    listable.options(yargs);

    return filterOptions(yargs);
  },

  handler: async (argv: ListCommandOption) => {
    try {
      // @ts-ignore
      // eslint-disable-next-line import/no-unresolved
      const { ListCommand } = await import('@qoopido/lerna.list');
      new ListCommand(argv);
    } catch (err: unknown) {
      console.error(
        `"@qoopido/lerna.list" is optional and was not found. Please install it with "npm install @qoopido/lerna.list -D -W".`,
        err
      );
    }
  },
};
