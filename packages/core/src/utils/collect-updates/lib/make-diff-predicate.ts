import log from 'npmlog';
import minimatch from 'minimatch';
import globby, { GlobbyOptions } from 'globby';
import path from 'path';
import slash from 'slash';

import { execSync } from '../../../child-process';
import { ExecOpts } from '../../../models';

/**
 * @param {string} committish
 * @param {import("@lerna/child-process").ExecOpts} execOpts
 * @param {string[]} ignorePatterns
 */
export function makeDiffPredicate(committish: string, execOpts: ExecOpts, ignorePatterns: string[] = []) {
  const ignoreFilters = new Set(
    ignorePatterns.map((p) =>
      minimatch.filter(`!${p}`, {
        matchBase: true,
        // dotfiles inside ignored directories should also match
        dot: true,
      })
    )
  );

  if (ignoreFilters.size) {
    log.info('ignoring diff in paths matching', ignorePatterns.join(' '));
  }

  return function hasDiffSinceThatIsntIgnored(/** @type {import("@lerna/package-graph").PackageGraphNode} */ node) {
    const diff = diffSinceIn(committish, node.location, execOpts);

    if (diff === '') {
      log.silly('', 'no diff found in %s', node.name);
      return false;
    }

    log.silly('found diff in', diff);
    let changedFiles = diff.split('\n');

    if (ignoreFilters.size) {
      for (const ignored of ignoreFilters) {
        changedFiles = changedFiles.filter(ignored);
      }
    }

    if (changedFiles.length) {
      log.verbose('filtered diff', changedFiles.join(' '));
    } else {
      log.verbose('', 'no diff found in %s (after filtering)', node.name);
    }

    return changedFiles.length > 0;
  };
}

/**
 * @param {string} committish
 * @param {string} location
 * @param {import("@lerna/child-process").ExecOpts} opts
 */
function diffSinceIn(committish, location, opts) {
  const args = ['diff', '--name-only', committish];
  const formattedLocation = slash(path.relative(opts.cwd, location));

  if (formattedLocation) {
    const excludeSubpackages = globby
      .sync('**/*/package.json', { cwd: formattedLocation, nodir: true, ignore: '**/node_modules/**' } as GlobbyOptions)
      .map((file) => `:^${formattedLocation}/${path.dirname(file)}`);

    // avoid same-directory path.relative() === ""
    args.push('--', formattedLocation, ...excludeSubpackages);
  }

  log.silly('checking diff', formattedLocation);
  return execSync('git', args, opts);
}
