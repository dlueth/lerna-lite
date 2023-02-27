jest.mock('@qoopido/lerna.watch', () => null);
import cliwatch from '../cli-watch-commands';

describe('Watch Command CLI options', () => {
  it('should log a console error when watchCommand is not provided', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await cliwatch.handler(undefined as any);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('"@qoopido/lerna.watch" is optional and was not found.'),
      expect.anything()
    );
  });
});
