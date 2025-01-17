import { Package } from '@qoopido/lerna.core';
import fs from 'fs-extra';
import path from 'path';

import { BLANK_LINE, COMMIT_GUIDELINE } from './constants';

/**
 * Read the existing changelog, if it exists.
 * @param {import("@lerna/package").Package} pkg
 * @returns {Promise<[string, string]>} A tuple of changelog location and contents
 */
export async function readExistingChangelog(pkg: Package) {
  const changelogFileLoc = path.join(pkg.location, 'CHANGELOG.md');

  let chain: Promise<any> = Promise.resolve();

  // catch allows missing file to pass without breaking chain
  chain = chain.then(() => fs.readFile(changelogFileLoc, 'utf8').catch(() => ''));

  chain = chain.then((changelogContents: string) => {
    // Remove the header if it exists, thus starting at the first entry.
    const headerIndex = changelogContents.indexOf(COMMIT_GUIDELINE);

    if (headerIndex !== -1) {
      return changelogContents.substring(headerIndex + COMMIT_GUIDELINE.length + BLANK_LINE.length);
    }

    return changelogContents;
  });

  // consumer expects resolved tuple
  chain = chain.then((changelogContents) => [changelogFileLoc, changelogContents]);

  return chain;
}
