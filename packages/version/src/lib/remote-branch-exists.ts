import log from 'npmlog';
import { ExecOpts, execSync } from '@qoopido/lerna.core';

/**
 * @param {string} gitRemote
 * @param {string} branch
 * @param {import('@lerna/child-process').ExecOpts} opts
 */
export function remoteBranchExists(gitRemote: string, branch: string, opts: ExecOpts, dryRun = false) {
  log.silly('remoteBranchExists', '');

  const remoteBranch = `${gitRemote}/${branch}`;

  try {
    execSync('git', ['show-ref', '--verify', `refs/remotes/${remoteBranch}`], opts, dryRun);
    return true;
  } catch (e) {
    return false;
  }
}
