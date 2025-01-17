jest.mock('@qoopido/lerna.run', () => null);
import cliRun from '../cli-run-commands';

describe('RunCommand CLI options', () => {
  it('should log a console error when RunCommand is not provided', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await cliRun.handler(undefined as any);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('"@qoopido/lerna.run" is optional and was not found.'),
      expect.anything()
    );
  });
});
