jest.mock('@qoopido/lerna.changed', () => null);
import cliChanged from '../cli-changed-commands';

describe('ChangedCommand CLI options', () => {
  it('should log a console error when ChangedCommand is not provided', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await cliChanged.handler(undefined as any);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('"@qoopido/lerna.changed" is optional and was not found.'),
      expect.anything()
    );
  });
});
