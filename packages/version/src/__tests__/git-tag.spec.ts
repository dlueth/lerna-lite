import { exec } from '@qoopido/lerna.core';

import { gitTag } from '../lib/git-tag';

jest.mock('@qoopido/lerna.core', () => {
  const { exec } = jest.requireActual('@qoopido/lerna.core');
  return {
    __esModule: true,
    exec: jest.fn(exec),
  };
});

describe('gitTag', () => {
  (exec as jest.Mock).mockResolvedValue(null);

  it('creates an annotated git tag', async () => {
    const tag = 'v1.2.3';
    const opts = { cwd: 'default' };

    await gitTag(tag, {}, opts);

    expect(exec).toHaveBeenLastCalledWith('git', ['tag', tag, '-m', tag], opts, false);
  });

  it('signs the tag when configured', async () => {
    const tag = 'v3.2.1';
    const opts = { cwd: 'signed' };

    await gitTag(tag, { signGitTag: true } as any, opts);

    expect(exec).toHaveBeenLastCalledWith('git', ['tag', tag, '-m', tag, '--sign'], opts, false);
  });

  it('forces the tag when configured', async () => {
    const tag = 'v1.1.1';
    const opts = { cwd: 'forced' };

    await gitTag(tag, { forceGitTag: true } as any, opts);

    expect(exec).toHaveBeenLastCalledWith('git', ['tag', tag, '-m', tag, '--force'], opts, false);
  });

  it('creates an annotated git tag using the wrapper arguments', async () => {
    const tag = 'v1.2.4';
    const opts = { cwd: 'default' };

    await gitTag(tag, {}, opts, 'git-wrapper gh-tag %s -m %s');

    expect(exec).toHaveBeenLastCalledWith('git-wrapper', ['gh-tag', tag, '-m', tag], opts, false);
  });
});
