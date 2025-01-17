import log from 'npmlog';
import { ExecOpts, execSync } from '@qoopido/lerna.core';

export function isAnythingCommitted(opts: ExecOpts, dryRun = false) {
  log.silly('isAnythingCommitted', '');
  let anyCommits = execSync('git', ['rev-list', '--count', '--all', '--max-count=1'], opts, dryRun);
  if (dryRun) {
    anyCommits = '1';
  }
  log.verbose('isAnythingCommitted', anyCommits);

  return Boolean(parseInt(anyCommits, 10));
}
