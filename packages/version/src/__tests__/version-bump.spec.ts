import nodeFs from 'fs';
jest.spyOn(nodeFs, 'renameSync');

// local modules _must_ be explicitly mocked
jest.mock('../lib/git-push', () => jest.requireActual('../lib/__mocks__/git-push'));
jest.mock('../lib/is-anything-committed', () => jest.requireActual('../lib/__mocks__/is-anything-committed'));
jest.mock('../lib/is-behind-upstream', () => jest.requireActual('../lib/__mocks__/is-behind-upstream'));
jest.mock('../lib/remote-branch-exists', () => jest.requireActual('../lib/__mocks__/remote-branch-exists'));

jest.mock('@qoopido/lerna.core', () => ({
  ...(jest.requireActual('@qoopido/lerna.core') as any), // return the other real methods, below we'll mock only 2 of the methods
  Command: jest.requireActual('../../../core/src/command').Command,
  conf: jest.requireActual('../../../core/src/command').conf,
  logOutput: jest.requireActual('../../../core/src/__mocks__/output').logOutput,
  promptConfirmation: jest.requireActual('../../../core/src/__mocks__/prompt').promptConfirmation,
  promptSelectOne: jest.requireActual('../../../core/src/__mocks__/prompt').promptSelectOne,
  promptTextInput: jest.requireActual('../../../core/src/__mocks__/prompt').promptTextInput,
  throwIfUncommitted: jest.requireActual('../../../core/src/__mocks__/check-working-tree').throwIfUncommitted,
}));

// also point to the local version command so that all mocks are properly used even by the command-runner
jest.mock('@qoopido/lerna.version', () => jest.requireActual('../version-command'));

import path from 'path';
import yargParser from 'yargs-parser';

// mocked modules
import { promptSelectOne, VersionCommandOption } from '@qoopido/lerna.core';

// helpers
import { commandRunner, initFixtureFactory } from '@lerna-test/helpers';
const initFixture = initFixtureFactory(path.resolve(__dirname, '../../../publish/src/__tests__'));
import { getCommitMessage } from '@lerna-test/helpers';

// test command
import { factory, VersionCommand } from '../version-command';
import cliCommands from '../../../cli/src/cli-commands/cli-version-commands';
const lernaVersion = commandRunner(cliCommands);

const createArgv = (cwd, ...args) => {
  args.unshift('version');
  if (args.length > 0 && args[1]?.length > 0 && !args[1].startsWith('-')) {
    args[1] = `--bump=${args[1]}`;
  }
  const parserArgs = args.map(String);
  const argv = yargParser(parserArgs);
  argv['$0'] = cwd;
  argv['loglevel'] = 'silent';
  return argv as unknown as VersionCommandOption;
};

describe('version bump', () => {
  it('accepts explicit versions', async () => {
    const testDir = await initFixture('normal');
    await new VersionCommand(createArgv(testDir, '--bump', '1.0.1-beta.25'));

    expect(promptSelectOne).not.toHaveBeenCalled();

    const message = await getCommitMessage(testDir);
    expect(message).toBe('v1.0.1-beta.25');
  });

  it('receives --repo-version <value> as explicit [bump]', async () => {
    const testDir = await initFixture('normal');
    await lernaVersion(testDir)('--repo-version', '1.0.1-beta.25');

    const message = await getCommitMessage(testDir);
    expect(message).toBe('v1.0.1-beta.25');
  });

  it('errors when --repo-version and [bump] positional passed', async () => {
    const testDir = await initFixture('normal');
    const command = lernaVersion(testDir)('v1.0.1-beta.25', '--repo-version', 'v1.0.1-beta.25');

    await expect(command).rejects.toThrow('Arguments repo-version and bump are mutually exclusive');
  });

  it('strips invalid semver information from explicit value', async () => {
    const testDir = await initFixture('normal');
    // await new VersionCommand(createArgv(testDir, "--bump", "v1.2.0-beta.1+deadbeef"));
    await lernaVersion(testDir)('v1.2.0-beta.1+deadbeef');

    const message = await getCommitMessage(testDir);
    expect(message).toBe('v1.2.0-beta.1');
  });

  it('accepts semver keywords', async () => {
    const testDir = await initFixture('normal');
    // await new VersionCommand(createArgv(testDir, "--bump", "minor"));
    await lernaVersion(testDir)('minor');

    expect(promptSelectOne).not.toHaveBeenCalled();

    const message = await getCommitMessage(testDir);
    expect(message).toBe('v1.1.0');
  });

  it('receives --cd-version <bump>', async () => {
    const testDir = await initFixture('normal');
    await lernaVersion(testDir)('--cd-version', 'premajor');

    const message = await getCommitMessage(testDir);
    expect(message).toBe('v2.0.0-alpha.0');
  });

  it('errors when --cd-version and [bump] positional passed', async () => {
    const testDir = await initFixture('normal');
    const command = lernaVersion(testDir)('minor', '--cd-version', 'minor');

    await expect(command).rejects.toThrow('Arguments cd-version and bump are mutually exclusive');
  });

  xit('throws an error when an invalid semver keyword is used', async () => {
    const testDir = await initFixture('normal');
    // const command = await new VersionCommand(createArgv(testDir, "--bump", "poopypants"));
    const command = lernaVersion(testDir)('poopypants');

    await expect(command).rejects.toThrow(
      'bump must be an explicit version string _or_ one of: ' +
        "'major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', or 'prerelease'."
    );
  });

  it('should call getPackagesForOption() with a csv string and expect it to return a Set of the split csv string', async () => {
    const testDir = await initFixture('independent');

    const command = new VersionCommand(createArgv(testDir, '--bump', 'prerelease'));
    const pkgNames = command.getPackagesForOption('foo,bar');

    expect(pkgNames).toEqual(new Set(['foo', 'bar']));
  });

  it('should call getPackagesForOption() with the same option called twice and expect it to return a Set of these 2 options', async () => {
    const testDir = await initFixture('independent');

    const command = new VersionCommand(createArgv(testDir, '--bump', 'prerelease'));
    const pkgNames = command.getPackagesForOption(['--force-publish foo', '--force-publish baz']);

    expect(pkgNames).toEqual(new Set(['--force-publish foo', '--force-publish baz']));
  });

  test('prerelease increments version with default --preid', async () => {
    const testDir = await initFixture('independent');

    // await new VersionCommand(createArgv(testDir, "--bump", "prerelease"));
    await factory(createArgv(testDir, '--bump', 'prerelease'));

    const message = await getCommitMessage(testDir);
    expect(message).toContain('package-1@1.0.1-alpha.0');
    // TODO: (major) make --no-private the default
    expect(message).toContain('package-5@5.0.1-alpha.0');
  });

  test('prerelease increments version with custom --preid', async () => {
    const testDir = await initFixture('independent');

    await new VersionCommand(createArgv(testDir, '--bump', 'prerelease', '--preid', 'foo'));

    const message = await getCommitMessage(testDir);
    expect(message).toContain('package-1@1.0.1-foo.0');
  });

  it('ignores private packages with --no-private', async () => {
    const testDir = await initFixture('independent');

    await new VersionCommand(createArgv(testDir, '--bump', 'patch', '--no-private'));

    const message = await getCommitMessage(testDir);
    // TODO: (major) make --no-private the default
    expect(message).not.toContain('package-5');
  });
});
