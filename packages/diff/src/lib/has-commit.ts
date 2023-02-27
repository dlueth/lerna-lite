import log from 'npmlog';
import { ExecOpts, execSync } from '@qoopido/lerna.core';

/**
 * @param {import("@lerna/child-process").ExecOpts} opts
 */
export function hasCommit(opts: ExecOpts) {
  log.silly('git', 'hasCommit');
  let retVal;

  try {
    execSync('git', ['log'], opts);
    retVal = true;
  } catch (e) {
    retVal = false;
  }

  log.verbose('hasCommit', retVal);
  return retVal;
}
